<style>
img {
    margin: 0 auto;
    display: block;
}
</style>

- [RecyclerView](#recyclerview)
- [ViewPager](#viewpager)
- [性能优化](#%e6%80%a7%e8%83%bd%e4%bc%98%e5%8c%96)
- [热更新/热修复](#%e7%83%ad%e6%9b%b4%e6%96%b0%e7%83%ad%e4%bf%ae%e5%a4%8d)
- [自定义View](#%e8%87%aa%e5%ae%9a%e4%b9%89view)
- [蓝牙/wifi](#%e8%93%9d%e7%89%99wifi)
- [地图](#%e5%9c%b0%e5%9b%be)
- [插件化](#%e6%8f%92%e4%bb%b6%e5%8c%96)
- [usb挂载](#usb%e6%8c%82%e8%bd%bd)
- [Arouter](#arouter)
- [Agora Platform](#agora-platform)
- [APT/SPI](#aptspi)
- [QPython](#qpython)
- [EventBus源码阅读](#eventbus%e6%ba%90%e7%a0%81%e9%98%85%e8%af%bb)
- [RxJava](#rxjava)
- [Gson](#gson)
- [Retrofit2](#retrofit2)
- [OKHttp](#okhttp)
- [Volley](#volley)
- [NoHttp](#nohttp)
- [android-async-http](#android-async-http)
- [Ksoap2 与 REST](#ksoap2-%e4%b8%8e-rest)
- [Glide](#glide)
- [Fresco](#fresco)
- [Piscsso](#piscsso)
- [Protocol](#protocol)
- [Dagger2](#dagger2)
- [ButterKnife](#butterknife)
- [ORM](#orm)
- [Hermes](#hermes)
- [适配](#%e9%80%82%e9%85%8d)
- [KLog](#klog)
- [工具](#%e5%b7%a5%e5%85%b7)
- [SDK](#sdk)
- [大项目](#%e5%a4%a7%e9%a1%b9%e7%9b%ae)

[你还在被触摸事件困扰吗？看看这篇吧](https://www.jianshu.com/p/06574d8f10bf)

## RecyclerView

1. RecyclerView.ViewHolder
    ```java
    public class RVViewHolderTest extends RecyclerView.ViewHolder {
        private View root;
        private SparseArray<View> views;  // 用于缓存View，不用每次都执行非常耗时的findViewById。
        public RVViewHolderTest(@NonNull View root) {
            super(root);
            this.root = root;
            this.views = new SparseArray<>();
        }
        public static RVViewHolderTest get(Context context, ViewGroup parent, int layoutId) {
            return new RVViewHolderTest(LayoutInflater.from(context).inflate(layoutId, parent, false));
        }
        public View getRoot() {
            return root;
        }
        public <T extends View> T getViewById(int id) {
            View view = views.get(id);
            if (view == null) {
                view = root.findViewById(id);
                views.put(id, view);
            }
            return (T) view;
        }
    }
    ```
2. RecyclerView.adapter
    ```java
    public abstract class RVAdapterTest<T> extends RecyclerView.Adapter<RVViewHolderTest> {
        private List<T> datas;
        private Context context;
        private int itemLayoutId;
        private RecyclerView recyclerView;
        private OnItemClickListener<T> onItemClickListener;
        public RVAdapterTest(List<T> datas, Context context, int itemLayoutId, RecyclerView recyclerView) {
            this.datas = datas;
            this.context = context;
            this.itemLayoutId = itemLayoutId;
            this.recyclerView = recyclerView;
        }
        public void setOnItemClickListener(OnItemClickListener<T> onItemClickListener) {
            this.onItemClickListener = onItemClickListener;
        }
        @Override
        public int getItemViewType(int position) {
            return super.getItemViewType(position);
        }
        @NonNull
        @Override
        public RVViewHolderTest onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
            return RVViewHolderTest.get(context, parent, itemLayoutId);
        }
        @Override
        public void onBindViewHolder(@NonNull final RVViewHolderTest viewHolder, int position) {
            if (datas == null || datas.size() == 0) return;
            final T data = datas.get(position);
            bindView(viewHolder, data);
            if (onItemClickListener != null) {
                viewHolder.getRoot().setOnClickListener(v -> onItemClickListener.onItemClick(v, data, position));
                viewHolder.getRoot().setOnLongClickListener(v -> onItemClickListener.onItemLongClick(v, data, position));
            }
            // 去除冗余的setItemClick事件 -- 但是需要用到data属性啊，真难，上面只有ViewHolder而没有position，所以。。。
            // 应该考虑使用 setOnTouchListener 与 GestureDetectorCompat(为什么使用这个???) ，不仅优雅，而且只需要一个 Listener 。但是使用TouchListener就真的只是Touch了，除非使用 GestureDetectorCompat.
        }
        public abstract void bindView(RVViewHolderTest viewHolder, T data);
        @Override
        public int getItemCount() {
            return datas.size();
        }
        public T getItem(int position) {
            return datas.get(position);
        }
        public void addData(T data) {
            datas.add(data);
            // notifyDataSetChanged();
            notifyItemInserted(datas.size() - 1);
        }
        public void addData(T data, int position) {
            datas.add(position, data);
            // notifyDataSetChanged();
            notifyItemInserted(position);
            recyclerView.scrollToPosition(position);
        }
        public T remove(int position) {
            T old = datas.remove(position);
            // notifyDataSetChanged();
            notifyItemRemoved(position);
            if (position < datas.size())
                recyclerView.scrollToPosition(position);
            return old;
        }
        public void remove(T data) {
            int position = datas.indexOf(data);
            datas.remove(data);
            // notifyDataSetChanged();
            notifyItemRemoved(position);
        }
        public void setDatas(List<T> datas) {
            this.datas = datas;
            notifyDataSetChanged();
        }
        public interface OnItemClickListener<T> {
            public void onItemClick(View view, T data, int position);
            public boolean onItemLongClick(View view, T data, int position);
        }
    }
    ```
3. RecyclerView
    ```java
    public class MainActivity extends AppCompatActivity {
        @Override
        protected void onCreate(@Nullable Bundle savedInstanceState) {
            super.onCreate(savedInstanceState);
            setContentView(R.layout.activity_test_recyclerview);
            int size = 30;
            List<ExampleItem> dataSet = new ArrayList<>(size);
            for (int i = 0; i < size; i++) {
                dataSet.add(new ExampleItem("string" + i, i, i + 0.5d, i % 2 == 0));
            }
            RecyclerView recyclerView = findViewById(R.id.test_recyclerview);
            recyclerView.setHasFixedSize(true);
            LinearLayoutManager layoutManager = new LinearLayoutManager(this, LinearLayoutManager.VERTICAL, false);
            layoutManager.setInitialPrefetchItemCount(5);
            layoutManager.setItemPrefetchEnabled(true);
            recyclerView.setLayoutManager(layoutManager);
            RVAdapterTest<ExampleItem> adapter = new RVAdapterTest<ExampleItem>(dataSet, this, R.layout.item_recyclerview_list, recyclerView) {
                @Override
                public void bindView(RVViewHolderTest viewHolder, ExampleItem data) {
                    ((TextView) viewHolder.getViewById(R.id.test_recyclerview_item_num)).setText(String.valueOf(data.getAnInt()));
                    ((TextView) viewHolder.getViewById(R.id.test_recyclerview_item_str)).setText(data.getString());
                    ((TextView) viewHolder.getViewById(R.id.test_recyclerview_item_double)).setText(String.valueOf(data.getaDouble()));
                    ((TextView) viewHolder.getViewById(R.id.test_recyclerview_item_bool)).setText(String.valueOf(data.isaBoolean()));
                }
            };
            recyclerView.setAdapter(adapter);
            recyclerView.addOnItemTouchListener(new RecyclerView.SimpleOnItemTouchListener() {
                private GestureDetectorCompat gestureDetectorCompat = new GestureDetectorCompat(
                        recyclerView.getContext(), new GestureDetector.SimpleOnGestureListener() {
                    @Override
                    public boolean onSingleTapConfirmed(MotionEvent e) {
                        View view = recyclerView.findChildViewUnder(e.getX(), e.getY());
                        if (view == null) return false;
                        int position = recyclerView.getChildAdapterPosition(view);
                        ExampleItem data = adapter.getItem(position);
                        Toast.makeText(MainActivity.this, data.toString(), Toast.LENGTH_LONG).show();
                        return true;
                    }
                });
                @Override
                public boolean onInterceptTouchEvent(@NonNull RecyclerView rv, @NonNull MotionEvent e) {
                    gestureDetectorCompat.onTouchEvent(e);
                    return false;
                }
            });
            recyclerView.addItemDecoration(new DividerItemDecoration(this, DividerItemDecoration.VERTICAL));
            recyclerView.postDelayed(() -> {
                adapter.addData(new ExampleItem("add string", 99, 99.5, false), 0);
                recyclerView.scrollToPosition(0);
            }, 5000);
            recyclerView.postDelayed(() -> {
                adapter.remove(0);
            }, 10000);
        }
    }
    ```
4. 下拉刷新 + 加载更多
    ```java
    // 下拉刷新
    SwipeRefreshLayout swipeRefreshLayout = findViewById(R.id.test_recyclerview_swipe);
    swipeRefreshLayout.setColorSchemeResources(
            android.R.color.holo_blue_bright,
            android.R.color.holo_green_light,
            android.R.color.holo_orange_light,
            android.R.color.holo_red_light);
    swipeRefreshLayout.setOnRefreshListener(() -> {
        recyclerView.postDelayed(() -> {
            int size1 = adapter.getItemCount();
            adapter.addData(new ExampleItem("string" + size1, size1, size1 + 0.5f, size1 % 2 == 0), 0);
            swipeRefreshLayout.setRefreshing(false);
        }, 1000);
    });
    ```
    ```java
    public abstract class LoadMoreScrollListener extends RecyclerView.OnScrollListener {
        private LinearLayoutManager mLinearLayoutManager;
        private boolean isLoading = false;
        private int previousTotal = 0;
        public LoadMoreScrollListener(LinearLayoutManager mLinearLayoutManager) {
            this.mLinearLayoutManager = mLinearLayoutManager;
        }
        // @Override
        // public void onScrollStateChanged(@NonNull RecyclerView recyclerView, int newState) {
        //     super.onScrollStateChanged(recyclerView, newState);
        //     String message = "UnKnown";
        //     switch (newState) {
        //         case RecyclerView.SCROLL_STATE_IDLE : message = "SCROLL_STATE_IDLE"; break;
        //         case RecyclerView.SCROLL_STATE_DRAGGING : message = "SCROLL_STATE_DRAGGING"; break;
        //         case RecyclerView.SCROLL_STATE_SETTLING : message = "SCROLL_STATE_SETTLING"; break;
        //     }
        //     Log.d("state", message);
        // }
        @Override
        public void onScrolled(@NonNull RecyclerView recyclerView, int dx, int dy) {
            super.onScrolled(recyclerView, dx, dy);
            // Log.e("totalItemCount", "" + mLinearLayoutManager.getItemCount());
            // Log.e("visibleItemCount", "" + mLinearLayoutManager.getChildCount());
            // Log.e("部分可见", "firstVisibleItemPosition" + mLinearLayoutManager.findFirstVisibleItemPosition());
            // Log.e("部分可见", "lastVisibleItemPosition" + mLinearLayoutManager.findLastVisibleItemPosition());
            // Log.e("完全可见", "firstCompletelyVisibleItemPosition" + mLinearLayoutManager.findFirstCompletelyVisibleItemPosition());
            // Log.e("完全可见", "lastCompletelyVisibleItemPosition" + mLinearLayoutManager.findLastCompletelyVisibleItemPosition());
            // Log.e("-", "------------------------------------");
            int totalItemCount = mLinearLayoutManager.getItemCount();
            int visibleItemCount = mLinearLayoutManager.getChildCount();
            if (isLoading) {
                if (totalItemCount > previousTotal) {  // 说明数据已经加载完了
                    isLoading = false;
                    previousTotal = totalItemCount;
                }
            } else if (visibleItemCount > 0 &&
                    mLinearLayoutManager.findLastVisibleItemPosition() >= totalItemCount - 1 &&  // 最后一个item可见
                    totalItemCount > visibleItemCount) {  // 数据不足一屏幕不触发加载更多
                onLoadMore();
                isLoading = true;
            }
        }
        public abstract void onLoadMore();
    }
    ```
    ```java
    /*
     * 1. setOnRefreshListener(OnRefreshListener) 添加下拉刷新监听，顶部下拉时会调用这个方法，在里面实现请求数据的逻辑，设置下拉进度条消失等等
     * 2. setRefreshing(boolean) 显示或者隐藏刷新动画
     * 3. isRefreshing() 检查是否处于刷新状态
     * 4. setColorSchemeResources() 设置进度条的颜色主题，参数为可变参数，并且是资源id，可以设置多种不同的颜色，每转一圈就显示一种颜色，以前的setColorScheme()方法已经弃用了
     */
    // 加载更多
    // 1. 如果我们想要在用户停止滑动之后触发加载更多，可以在onScrollStateChanged方法中来判断状态是否是SCROLL_STATE_IDLE，然后再判断是否滑到底部
    // 2. 如果我们想要在用户滑动过程中触发加载更多，只需要在onScrolled方法中判断是否滑到底部
    /*
     * public abstract static class OnScrollListener {
     *     /**
     *      * 滑动状态改变时的回调，newState有:
     *      * 1. SCROLL_STATE_IDLE  滑动停止
     *      * 2. SCROLL_STATE_DRAGGING  正在触摸或者滑动
     *      * 3. SCROLL_STATE_SETTLING  不是在外界控制下的自动滑动↓
     *      * 调用scrollToPosition()方法时会触发这个状态
     *      * /
     *     public void onScrollStateChanged(RecyclerView recyclerView, int newState){}
     *     /**
     *      * 在 RecyclerView 发生滑动时调用
     *      * @param dx 滑动时水平方向的偏移量，有正负之分
     *      * @param dy 滑动时竖直方向的偏移量，有正负之分
     *      * /
     *     public void onScrolled(RecyclerView recyclerView, int dx, int dy){}
     * }
     */
    recyclerView.addOnScrollListener(new LoadMoreScrollListener(layoutManager) {
        @Override
        public void onLoadMore() {
            swipeRefreshLayout.setRefreshing(true);
            recyclerView.postDelayed(() -> {
                int size1 = adapter.getItemCount();
                adapter.addData(new ExampleItem("string" + size1, size1, size1 + 0.5f, size1 % 2 == 0));
                swipeRefreshLayout.setRefreshing(false);
            }, 1000);
        }
    });
    ```
    ```java
    public abstract class LoadMoreScrollListener2 extends RecyclerView.OnScrollListener {
        private LinearLayoutManager layoutManager;
        private int lastState = RecyclerView.SCROLL_STATE_IDLE;
        private long timeLimit;
        private long lastTimeMillis = -1;
        public LoadMoreScrollListener2(LinearLayoutManager layoutManager) {
            this(layoutManager, 256);
        }
        public LoadMoreScrollListener2(LinearLayoutManager layoutManager, long timeLimit) {
            this.layoutManager = layoutManager;
            this.timeLimit = timeLimit;
        }
        @Override
        public void onScrollStateChanged(@NonNull RecyclerView recyclerView, int newState) {
            super.onScrollStateChanged(recyclerView, newState);
            if (newState == RecyclerView.SCROLL_STATE_IDLE) {
                // Log.d("RecyclerView.SCROLL_STATE_IDLE time: ", String.valueOf(System.currentTimeMillis()));
                if (layoutManager.findLastCompletelyVisibleItemPosition() < layoutManager.getItemCount() - 1)
                    return;
                if (System.currentTimeMillis() - lastTimeMillis > timeLimit)
                    onLoadMore();
            } else if (newState == RecyclerView.SCROLL_STATE_DRAGGING && lastState == RecyclerView.SCROLL_STATE_IDLE) {
                lastTimeMillis = System.currentTimeMillis();
                // Log.d("RecyclerView.SCROLL_STATE_DRAGGING time: ", String.valueOf(lastTimeMillis));
            }
            lastState = newState;
        }
        @Override
        public void onScrolled(@NonNull RecyclerView recyclerView, int dx, int dy) {
            super.onScrolled(recyclerView, dx, dy);
            lastTimeMillis = System.currentTimeMillis();
            // Log.d("onScrolled time: ", Instant.ofEpochMilli(lastTimeMillis).toString());
            // Log.d("onScrolled time: ", String.valueOf(lastTimeMillis));
        }

        public abstract void onLoadMore();
    }
    ```
5. Header + Footer + 优化的加载更多
    ```java
    public abstract class RVAdapterTest<T> extends RecyclerView.Adapter<RVViewHolderTest> {
        // ...
        private OnItemViewTypeListener<T> onItemViewTypeListener;
        private int[] itemLayoutIds = null;
        private View headerView = null;
        private View footerView = null;
        private static final int TYPE_HEADER = -1;
        private static final int TYPE_FOOTER = -2;
        // ...
        @Override
        public int getItemViewType(int position) {
            if (headerView != null) {
                if (position == 0)
                    return TYPE_HEADER;
                position--;
            }
            if (footerView != null && position == datas.size())
                return TYPE_FOOTER;
            return onItemViewTypeListener != null && itemLayoutIds != null ?
                    onItemViewTypeListener.getItemViewType(position, datas.get(position)) :
                    super.getItemViewType(position);
        }
        public void setOnItemViewTypeListener(OnItemViewTypeListener<T> onItemViewTypeListener) {
            this.onItemViewTypeListener = onItemViewTypeListener;
        }
        public void setItemLayoutIds(int[] itemLayoutIds) {
            this.itemLayoutIds = itemLayoutIds;
        }
        public void setHeaderView(View headerView) {
            this.headerView = headerView;
        }
        public void setFooterView(View footerView) {
            this.footerView = footerView;
        }
        @NonNull
        @Override
        public RVViewHolderTest onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
            if (viewType == TYPE_HEADER && headerView != null)
                return new RVViewHolderTest(headerView);
            if (viewType == TYPE_FOOTER && footerView != null)
                return new RVViewHolderTest(footerView);
            return onItemViewTypeListener == null || itemLayoutIds == null || viewType >= itemLayoutIds.length || viewType < 0 ?
                    RVViewHolderTest.get(context, parent, itemLayoutId) :
                    RVViewHolderTest.get(context, parent, itemLayoutIds[viewType]);
        }
        @Override
        public void onBindViewHolder(@NonNull final RVViewHolderTest viewHolder, int position) {
            if (datas == null || datas.size() == 0) return;
            if (headerView != null) {
                if (position == 0)
                    return;
                position--;
            }
            if (footerView != null && position == datas.size())
                return;
            final int pos = position;
            final T data = datas.get(position);
            bindView(viewHolder, data, position);
            if (onItemClickListener != null) {
                viewHolder.getRoot().setOnClickListener(v -> onItemClickListener.onItemClick(v, data, pos));
                viewHolder.getRoot().setOnLongClickListener(v -> onItemClickListener.onItemLongClick(v, data, pos));
            }
        }
        @Override
        public int getItemCount() {
            int size = datas.size();
            if (headerView != null)
                size++;
            if (footerView != null)
                size++;
            return size;
        }
        public int getDataSize() {
            return datas.size();
        }
        public T getItem(int position) {
            return datas.get(position);
        }
        public void addData(T data) {
            int position = datas.size();
            datas.add(data);
            if (headerView != null)
                position++;
            notifyItemInserted(position);
            if (footerView != null)
                position++;
            recyclerView.scrollToPosition(position);
        }
        public void addData(T data, int position) {
            datas.add(position, data);
            if (headerView != null)
                position++;
            notifyItemInserted(position);
            if (footerView != null && position == datas.size() - 1)
                position++;
            recyclerView.scrollToPosition(position);
        }
        public T remove(int position) {
            int dataPosition = position;
            T old = datas.remove(position);
            if (headerView != null)
                position++;
            notifyItemRemoved(position);
            scrollToPosition(position, dataPosition);
            return old;
        }
        public void remove(T data) {
            int position = datas.indexOf(data);
            int dataPosition = position;
            if (headerView != null)
                position++;
            datas.remove(data);
            notifyItemRemoved(position);
            scrollToPosition(position, dataPosition);
        }
        private void scrollToPosition(int position, int dataPosition) {
            if (dataPosition == 0)
                recyclerView.scrollToPosition(0);
            else if (dataPosition < datas.size() || footerView != null)
                recyclerView.scrollToPosition(position);
            else
                recyclerView.scrollToPosition(position - 1);
        }
        public void setDatas(List<T> datas) {
            this.datas = datas;
            notifyDataSetChanged();
            if (datas.size() > 0)
                recyclerView.scrollToPosition(0);
        }
        @Override
        public void onAttachedToRecyclerView(@NonNull RecyclerView recyclerView) {
            super.onAttachedToRecyclerView(recyclerView);
            RecyclerView.LayoutManager layoutManager = recyclerView.getLayoutManager();
            if (layoutManager instanceof GridLayoutManager) {
                final GridLayoutManager gridLayoutManager = (GridLayoutManager) layoutManager;
                gridLayoutManager.setSpanSizeLookup(new GridLayoutManager.SpanSizeLookup() {
                    @Override
                    public int getSpanSize(int position) {
                        if (headerView != null && position == 0 || footerView != null && position == datas.size() + 1)
                            return gridLayoutManager.getSpanCount();
                        return 1;
                    }
                });
            }
        }
        @Override
        public void onViewAttachedToWindow(@NonNull RVViewHolderTest holder) {
            super.onViewAttachedToWindow(holder);
            ViewGroup.LayoutParams layoutParams = holder.itemView.getLayoutParams();
            if (layoutParams instanceof StaggeredGridLayoutManager.LayoutParams)
                ((StaggeredGridLayoutManager.LayoutParams) layoutParams).setFullSpan(
                        holder.getItemViewType() == TYPE_FOOTER || holder.getItemViewType() == TYPE_HEADER);
        }
    }
    ```
    ```java
    int size = 10;
    List<ExampleItem> dataSet = new ArrayList<>(size);
    for (int i = 0; i < size; i++) {
        dataSet.add(new ExampleItem("string" + i, i, i + 0.5d, i % 2 == 0));
    }
    RecyclerView recyclerView = findViewById(R.id.test_recyclerview);
    recyclerView.setHasFixedSize(true);
    LinearLayoutManager layoutManager = new LinearLayoutManager(this, LinearLayoutManager.VERTICAL, false);
    layoutManager.setInitialPrefetchItemCount(5);
    layoutManager.setItemPrefetchEnabled(true);
    recyclerView.setLayoutManager(layoutManager);
    RVAdapterTest<ExampleItem> adapter = new RVAdapterTest<ExampleItem>(dataSet, this, R.layout.item_recyclerview_list, recyclerView) {
        @Override
        public void bindView(RVViewHolderTest viewHolder, ExampleItem data, int position) {
            ((TextView) viewHolder.getViewById(R.id.test_recyclerview_item_num)).setText(String.valueOf(data.getAnInt()));
            ((TextView) viewHolder.getViewById(R.id.test_recyclerview_item_str)).setText(data.getString());
            ((TextView) viewHolder.getViewById(R.id.test_recyclerview_item_double)).setText(String.valueOf(data.getaDouble()));
            ((TextView) viewHolder.getViewById(R.id.test_recyclerview_item_bool)).setText(String.valueOf(data.isaBoolean()));
        }
    };
    adapter.setHeaderView(LayoutInflater.from(this).inflate(R.layout.item_recyclerview_header, recyclerView, false));
    adapter.setFooterView(LayoutInflater.from(this).inflate(R.layout.item_recyclerview_footer, recyclerView, false));
    adapter.setItemLayoutIds(new int[] { R.layout.item_recyclerview_list, R.layout.item_recyclerview_list2, R.layout.item_recyclerview_list3 });
    adapter.setOnItemViewTypeListener((position, data) -> data.getAnInt() % 3);
    // adapter.setOnItemClickListener(new RVAdapterTest.OnItemClickListener<ExampleItem>() {
    //     @Override
    //     public void onItemClick(View view, ExampleItem data, int position) {
    //         Toast.makeText(MainActivity.this, data.toString(), Toast.LENGTH_LONG).show();
    //     }
    //
    //     @Override
    //     public boolean onItemLongClick(View view, ExampleItem data, int position) {
    //         return false;
    //     }
    // });
    recyclerView.setAdapter(adapter);
    // recyclerView.addOnItemTouchListener(new RecyclerView.SimpleOnItemTouchListener() {
    //     @Override
    //     public boolean onInterceptTouchEvent(@NonNull RecyclerView rv, @NonNull MotionEvent e) {
    //         View view = rv.findChildViewUnder(e.getX(), e.getY());
    //         if (view == null) return false;
    //         int position = rv.getChildAdapterPosition(view);
    //         ExampleItem data = adapter.getItem(position);
    //         Toast.makeText(MainActivity.this, data.toString(), Toast.LENGTH_LONG).show();
    //         return false;
    //     }
    // });
    recyclerView.addOnItemTouchListener(new RecyclerView.SimpleOnItemTouchListener() {
        private GestureDetectorCompat gestureDetectorCompat = new GestureDetectorCompat(
                recyclerView.getContext(), new GestureDetector.SimpleOnGestureListener() {
            @Override
            public boolean onSingleTapConfirmed(MotionEvent e) {
                View view = recyclerView.findChildViewUnder(e.getX(), e.getY());
                if (view == null) return false;
                int position = recyclerView.getChildAdapterPosition(view);
                ExampleItem data = adapter.getItem(position);
                Toast.makeText(MainActivity.this, data.toString(), Toast.LENGTH_LONG).show();
                return true;
            }
        });
        @Override
        public boolean onInterceptTouchEvent(@NonNull RecyclerView rv, @NonNull MotionEvent e) {
            gestureDetectorCompat.onTouchEvent(e);
            return false;
        }
    });
    recyclerView.addItemDecoration(new DividerItemDecoration(this, DividerItemDecoration.VERTICAL));
    // recyclerView.postDelayed(() -> {
    //     adapter.addData(new ExampleItem("add string", 99, 99.5, false), 0);
    //     recyclerView.scrollToPosition(0);
    // }, 5000);
    // recyclerView.postDelayed(() -> {
    //     adapter.remove(0);
    // }, 10000);
    SwipeRefreshLayout swipeRefreshLayout = findViewById(R.id.test_recyclerview_swipe);
    swipeRefreshLayout.setColorSchemeResources(
            android.R.color.holo_blue_bright,
            android.R.color.holo_green_light,
            android.R.color.holo_orange_light,
            android.R.color.holo_red_light);
    swipeRefreshLayout.setOnRefreshListener(() -> {
        recyclerView.postDelayed(() -> {
            int size1 = adapter.getDataSize();
            adapter.addData(new ExampleItem("string" + size1, size1, size1 + 0.5f, size1 % 2 == 0), 0);
            swipeRefreshLayout.setRefreshing(false);
        }, 1000);
    });
    // recyclerView.addOnScrollListener(new LoadMoreScrollListener(layoutManager) {
    //     @Override
    //     public void onLoadMore() {
    //         swipeRefreshLayout.setRefreshing(true);
    //         recyclerView.postDelayed(() -> {
    //             int size1 = adapter.getDataSize();
    //             adapter.addData(new ExampleItem("string" + size1, size1, size1 + 0.5f, size1 % 2 == 0));
    //             swipeRefreshLayout.setRefreshing(false);
    //         }, 1000);
    //     }
    // });
    recyclerView.addOnScrollListener(new LoadMoreScrollListener2(layoutManager, 256) {
        @Override
        public void onLoadMore() {
            if (swipeRefreshLayout.isRefreshing())
                return;
            swipeRefreshLayout.setRefreshing(true);
            recyclerView.postDelayed(() -> {
                int size1 = adapter.getDataSize();
                adapter.addData(new ExampleItem("string" + size1, size1, size1 + 0.5f, size1 % 2 == 0));
                swipeRefreshLayout.setRefreshing(false);
            }, 1000);
        }
    });
    recyclerView.postDelayed(() -> {
        int size1 = adapter.getDataSize();
        adapter.addData(new ExampleItem("string" + size1, size1, size1 + 0.5f, size1 % 2 == 0));
    }, 5000);
    recyclerView.postDelayed(() -> {
        int size1 = adapter.getDataSize();
        adapter.addData(new ExampleItem("string" + size1, size1, size1 + 0.5f, size1 % 2 == 0), 0);
    }, 10000);
    ```
    ```xml
    <android.support.v4.widget.SwipeRefreshLayout
        android:id="@+id/test_recyclerview_swipe"
        android:layout_width="match_parent"
        android:layout_height="wrap_content">

        <android.support.v7.widget.RecyclerView
            android:id="@+id/test_recyclerview"
            android:scrollbars="vertical"
            android:layout_width="match_parent"
            android:layout_height="wrap_content"/>
    </android.support.v4.widget.SwipeRefreshLayout>
    ```
6. 滑动删除 + 长按拖曳
    ```java
    ItemTouchHelper itemTouchHelper = new ItemTouchHelper(new ItemTouchHelper.Callback() {
        /**
         * 指定可以拖拽(drag)和滑动(swipe)的方向
         * ItemTouchHelper.UP、ItemTouchHelper.DOWN、ItemTouchHelper.LEFT、ItemTouchHelper.RIGHT、ItemTouchHelper.START、ItemTouchHelper.END
         * 若返回0，表示不触发滑动or拖拽
         */
        @Override
        public int getMovementFlags(@NonNull RecyclerView recyclerView, @NonNull RecyclerView.ViewHolder viewHolder) {
            return 0;
        }
        /**
         * 拖拽到新位置时候的回调方法
         * @param viewHolder  拖动的ViewHolder
         * @param target   目标位置的ViewHolder
         */
        @Override
        public boolean onMove(@NonNull RecyclerView recyclerView, @NonNull RecyclerView.ViewHolder viewHolder, @NonNull RecyclerView.ViewHolder target) {
            return false;
        }
        /**
         * 滑动时的回调方法
         * @param viewHolder 滑动的ViewHolder
         * @param direction  滑动的方向
         */
        @Override
        public void onSwiped(@NonNull RecyclerView.ViewHolder viewHolder, int direction) {
        }
        /* ---------- 下面是可以选择重写的，需要时重写 ---------- */
        /**
         * 是否支持长按拖拽，默认为true，表示支持长按拖拽，对应长按移动位置功能
         * 也可以返回false，手动调用startDrag()方法启动拖拽
         */
        @Override
        public boolean isLongPressDragEnabled() {
            return super.isLongPressDragEnabled();
        }
        /**
         * 是否支持任意位置触摸事件发生时启用滑动操作，默认为true，表示支持滑动，对应滑动删除功能
         * 也可以返回false，手动调用startSwipe()方法启动滑动
         */
        @Override
        public boolean isItemViewSwipeEnabled() {
            return super.isItemViewSwipeEnabled();
        }
    });
    itemTouchHelper.attachToRecyclerView(recyclerView);
    ```
    ```java
    ItemTouchHelper itemTouchHelper = new ItemTouchHelper(new ItemTouchHelper.SimpleCallback(
            ItemTouchHelper.UP | ItemTouchHelper.DOWN | ItemTouchHelper.LEFT | ItemTouchHelper.RIGHT,
            ItemTouchHelper.START | ItemTouchHelper.END) {
        @Override
        public boolean onMove(@NonNull RecyclerView recyclerView, @NonNull RecyclerView.ViewHolder viewHolder, @NonNull RecyclerView.ViewHolder target) {
            adapter.move(viewHolder.getAdapterPosition() - 1, target.getAdapterPosition() - 1);
            return true;
        }
        @Override
        public void onSwiped(@NonNull RecyclerView.ViewHolder viewHolder, int direction) {
            adapter.remove(viewHolder.getAdapterPosition() - 1);
        }
        @Override
        public void onChildDraw(@NonNull Canvas c, @NonNull RecyclerView recyclerView, @NonNull RecyclerView.ViewHolder viewHolder, float dX, float dY, int actionState, boolean isCurrentlyActive) {
            super.onChildDraw(c, recyclerView, viewHolder, dX, dY, actionState, isCurrentlyActive);
            if (actionState == ItemTouchHelper.ACTION_STATE_SWIPE) {
                // 滑动时改变Item的透明度
                final float alpha = 1 - Math.abs(dX) / (float) viewHolder.itemView.getWidth();
                viewHolder.itemView.setAlpha(alpha);
                viewHolder.itemView.setTranslationX(dX);
            }
        }
    });
    itemTouchHelper.attachToRecyclerView(recyclerView);
    ```
    ```java
    // Adapter中添加了
    public void move(int fromPosition, int toPosition) {
        T sourceData = datas.get(fromPosition);
        int increment = fromPosition < toPosition ? 1 : -1;
        for (int i = fromPosition; i != toPosition; i += increment)
            datas.set(i, datas.get(i + increment));
        datas.set(toPosition, sourceData);
        if (headerView != null) {
            fromPosition++;
            toPosition++;
        }
        notifyItemMoved(fromPosition, toPosition);
    }
    ```
7. 

## ViewPager

1. ViewPager
2. PagerAdapter
3. FragmentPagerAdapter
4. FragmentStatePagerAdapter
5. 在support v13和support v4中都提供了FragmentPagerAdapter和FragmentStatePagerAdapter，区别在于：support v13中使用android.app.Fragment，而support v4使用android.support.v4.app.Fragment。一般都使用support v4中的FragmentPagerAdapter和FragmentStatePagerAdapter。
6. 默认，ViewPager会缓存当前页相邻的界面，比如当滑动到第2页时，会初始化第1页和第3页的界面(即Fragment对象，且生命周期函数运行到onResume())，可以通过 setOffscreenPageLimit(count)设置离线缓存的界面个数。
7. **重写方法**。FragmentPagerAdapter和FragmentStatePagerAdapter需要重写的方法都一样，常见的重写方法如下：
    1. public FragmentPagerAdapter(FragmentManager fm): 构造函数，参数为FragmentManager。如果是嵌套Fragment场景，子 PagerAdapter的参数传入getChildFragmentManager()。
    2. Fragment getItem(int position): 返回第position位置的Fragment，必须重写。
    3. int getCount(): 返回ViewPager的页数，必须重写。
    4. Object instantiateItem(ViewGroup container, int position): container是ViewPager对象，返回第position位置的Fragment。
    5. void destroyItem(ViewGroup container, int position, Object object): container是ViewPager对象，object是Fragment对象。
    6. getItemPosition(Object object): object是Fragment对象，如果返回POSITION_UNCHANGED，则表示当前Fragment不刷新，如果返回POSITION_NONE，则表示当前Fragment需要调用destroyItem()和instantiateItem()进行销毁和重建。 默认情况下返回POSITION_UNCHANGED。
8. **懒加载**
    1. 懒加载主要用于ViewPager且每页是Fragment的情况，场景为微信主界面，底部有4个tab，当滑到另一个tab时，先显示"正在加载"，过一会才会显示正常界面。默认情况，ViewPager会缓存当前页和左右相邻的界面。实现懒加载的主要原因是：用户没进入的界面需要有一系列的网络、数据库等耗资源、耗时的操作，预先做这些数据加载是不必要的。
    2. 这里懒加载的实现思路是：用户不可见的界面，只初始化UI，但是不会做任何数据加载。等滑到该页，才会异步做数据加载并更新UI。这里就实现类似微信那种效果，整个UI布局为：底部用PagerBottomTabStrip(https://github.com/tyzlmjj/PagerBottomTabStrip)项目实现，上面是ViewPager，使用FragmentPagerAdapter。逻辑为：当用户滑到另一个界面，首先会显示正在加载，等数据加载完毕后(这里用睡眠1秒钟代替)显示正常界面。
    3. ViewPager默认缓存左右相邻界面，为了避免不必要的重新数据加载(重复调用onCreateView())，因为有4个tab，因此将离线缓存的半径设置为3，即 setOffscreenPageLimit(3)。
    4. 

## 性能优化

1. RecyclerView [RecyclerView性能优化](https://www.jianshu.com/p/bd432a3527d6) [RecyclerView一些你可能需要知道的优化技术](https://www.jianshu.com/p/1d2213f303fc)
    1. 数据处理与视图绑定分离: 在onBindViewHolder方法中，应该只是将数据set到视图中，而不应进行业务的处理。
    2. 数据优化
        1. 分页加载远端数据，对拉取的远端数据进行缓存，提高二次加载速度；
        2. 对于新增或删除数据通过DiffUtil，来进行局部数据刷新，而不是一味的全局刷新数据。DiffUtil是support包下新增的一个工具类，用来判断新数据和旧数据的差别，从而进行局部刷新。在原来调用mAdapter.notifyDataSetChanged()的地方：
            ```java
            // mAdapter.notifyDataSetChanged()
            DiffUtil.DiffResult diffResult = DiffUtil.calculateDiff(new DiffCallBack(oldDatas, newDatas), true);
            diffResult.dispatchUpdatesTo(mAdapter);
            ```
        3. DiffUtil最终是调用Adapter的下面几个方法来进行局部刷新
            ```java
            mAdapter.notifyItemRangeInserted(position, count);
            mAdapter.notifyItemRangeRemoved(position, count);
            mAdapter.notifyItemMoved(fromPosition, toPosition);
            mAdapter.notifyItemRangeChanged(position, count, payload);
            ```
    3. 布局优化
        1. 减少过度绘制: 减少布局层级，可以考虑使用自定义View来减少层级，或者更合理的设置布局来减少层级。**Note**: 目前不推荐在RecyclerView中使用ConstraintLayout，在ConstraintLayout1.1.2版中，性能还是表现不佳。
        2. 减少xml文件inflate时间: xml文件包括：layout、drawable的xml，xml文件inflate出ItemView是通过耗时的IO操作。可以使用代码去生成布局，即new View()的方式。这种方式是比较麻烦，但是在布局太过复杂，或对性能要求比较高的时候可以使用。
        3. 减少View对象的创建: 一个稍微复杂的 Item 会包含大量的 View，而大量的 View 的创建也会消耗大量时间，所以要尽可能简化 ItemView；设计 ItemType 时，对多 ViewType 能够共用的部分尽量设计成自定义 View，减少 View 的构造和嵌套。
        4. 设置高度固定: 如果item高度是固定的话，可以使用RecyclerView.setHasFixedSize(true);来避免requestLayout浪费资源。
    4. 共用RecycledViewPool: 在嵌套RecyclerView中，如果子RecyclerView具有相同的adapter，那么可以设置RecyclerView.setRecycledViewPool(pool)来共用一个RecycledViewPool。**Note**: 如果LayoutManager是LinearLayoutManager或其子类，需要手动开启这个特性：layout.setRecycleChildrenOnDetach(true)。
    5. RecyclerView数据预取: RecyclerView25.1.0及以上版本增加了Prefetch功能。用于嵌套RecyclerView获取最佳性能。[数据预取](https://juejin.im/entry/58a3f4f62f301e0069908d8f)。**Note**: 只适合横向嵌套
        ```java
        // 在嵌套内部的LayoutManager中调用LinearLayoutManger的设置方法
        // num的取值：如果列表刚刚展示4个半item，则设置为5
        innerLLM.setInitialItemsPrefetchCount(num);
        ```
    6. 加大RecyclerView的缓存。用空间换时间，来提高滚动的流畅性。
        ```java
        recyclerView.setItemViewCacheSize(20);
        recyclerView.setDrawingCacheEnabled(true);
        recyclerView.setDrawingCacheQuality(View.DRAWING_CACHE_QUALITY_HIGH);
        ```
    7. 增加RecyclerView预留的额外空间。额外空间：显示范围之外，应该额外缓存的空间。
        ```java
        new LinearLayoutManager(this) {
            @Override
            protected int getExtraLayoutSpace(RecyclerView.State state) {
                return size;
            }
        };
        ```
    8. 减少ItemView监听器的创建。对ItemView设置监听器，不要对每个item都创建一个监听器，而应该共用一个XxListener，然后根据ID来进行不同的操作，优化了对象的频繁创建带来的资源消耗。
    9. 优化滑动操作。设置RecyclerView.addOnScrollListener();来在滑动过程中停止加载的操作。
    9. 回收资源。通过重写RecyclerView.onViewRecycled(holder)来回收资源。
    10. 处理刷新闪烁。调用notifyDataSetChange时，适配器不知道整个数据集中的那些内容以及存在，再重新匹配ViewHolder时会花生闪烁。设置adapter.setHasStableIds(true)，并重写getItemId()来给每个Item一个唯一的ID。
    11. 学会使用 swapAdapter 。 rv的setadapter大家都会使用，没什么好说的，但关于swapadapter可能就有些人不太知道了，这两个方法最大的不同之处就在于setadapter会直接清空rv上的所有缓存，而swapadapter会将rv上的holder保存到pool中，google提供swapadapter方法考虑到的一个应用场景应该是两个数据源有很大的相似部分的情况下，直接使用setadapter重置的话会导致原本可以被复用的holder全部被清空，而使用swapadapter来代替setadapter可以充分利用rv的缓存机制。
    12. 推荐 asynclistdiffer 代替 DiffUtils 。
2. ListView

## 热更新/热修复

0. link
    * **[Android热更新系列](https://www.jianshu.com/nb/35349338)**
    * [Android架构设计](https://www.jianshu.com/nb/36120611)
    * [Android热更新技术的研究与实现(一)](https://www.jianshu.com/p/4ecd611383e6)
    * [atlas](https://github.com/alibaba/atlas/tree/master/atlas-docs)
1. 基础技术
    1. 类加载过程
        1. 每个类编译后产生一个Class对象，存储在.class文件中，JVM使用类加载器(Class Loader)来加载类的字节码文件(.class)，类加载器实质上是一条类加载器链，一般的，我们只会用到一个原生的类加载器，它只加载Java API等可信类，通常只是在本地磁盘中加载，这些类一般就够我们使用了。如果我们需要从远程网络或数据库中下载.class字节码文件，那就需要我们来挂载额外的类加载器。
        2. 一般来说，类加载器是按照树形的层次结构组织的，每个加载器都有一个父类加载器。另外，每个类加载器都支持代理模式，即可以自己完成Java类的加载工作，也可以代理给其它类加载器。类加载器的加载顺序有两种：
            1. **父类优先策略**是比较一般的情况(如JDK采用的就是这种方式)，这时，类在加载某个Java类之前，会尝试代理给其父类加载器，只有当父类加载器找不到时，才尝试自己去加载。
            2. **自己优先的策略**与父类优先相反，它会首先尝试子自己加载，找不到的时候才要父类加载器去加载，这种在web容器(如tomcat)中比较常见。
        3. 类的加载和初始化: 需要区分加载和初始化的区别，加载了一个类的.class文件，不意味着该Class对象被初始化，事实上，一个类的初始化包括3个步骤
            1. **加载**(Loading)，由类加载器执行，查找字节码，并创建一个Class对象(只是创建)；**动态加载**: 不管使用什么样的类加载器，类，都是在第一次被用到时，动态加载到JVM的。这句话有两层含义
                1. Java程序在运行时并不一定被完整加载，只有当发现该类还没有加载时，才去本地或远程查找类的.class文件并验证和加载；
                2. 当程序创建了第一个对类的**静态成员**的引用(如类的静态变量、静态方法、构造方法——构造方法也是静态的)时，才会加载该类。Java的这个特性叫做：动态加载。
            2. **链接**(Linking)，验证字节码，为静态域分配存储空间(只是分配，并不初始化该存储空间)，解析该类创建所需要的对其它类的应用；Java在加载了类之后，需要进行链接的步骤，链接简单地说，就是将已经加载的java二进制代码组合到JVM运行状态中去。
                1. **验证**(Verification)，验证是保证二进制字节码在**结构上的正确性**，具体来说，工作包括检测类型正确性，接入属性正确性(public、private)，检查final class没有被继承，检查静态变量的正确性等。
                2. **准备**(Preparation)，准备阶段主要是创建**静态域**，分配空间，给这些域设默认值，需要注意的是两点：一个是在准备阶段不会执行任何代码，仅仅是设置默认值，二个是这些默认值是这样分配的，原生类型全部设为0，如：float:0f,int 0, long 0L, boolean:0(布尔类型也是0)，其它引用类型为null。
                3. **解析**(Resolution)，解析的过程就是对类中的接口、类、方法、变量的符号引用进行解析并定位，解析成**直接引用**(**符号引用**就是编码是用字符串表示某个变量、接口的位置，直接引用就是根据符号引用翻译出来的地址)，并保证这些类被正确的找到。解析的过程可能导致其它的类被加载。需要注意的是，根据不同的解析策略，这一步不一定是必须的，有些解析策略在解析时递归的把所有引用解析，这是early resolution，要求所有引用都必须存在；还有一种策略是late resolution，这也是Oracle 的JDK所采取的策略，即在类只是被引用了，还没有被真正用到时，并不进行解析，只有当真正用到了，才去加载和解析这个类。
            3. **初始化**(Initialization)，首先执行静态初始化块static{}，初始化静态变量，执行静态方法(如构造方法)。根据java虚拟机规范，所有java虚拟机实现必须在每个类或接口被java程序首次主动使用时才初始化。
                1. 创建类的实例
                2. 访问某个类或者接口的静态变量，或者对该静态变量赋值(如果访问静态编译时常量(即编译时可以确定值的常量)不会导致类的初始化)
                3. 调用类的静态方法
                4. 反射(Class.forName(xxx.xxx.xxx))
                5. 初始化一个类的子类(相当于对父类的主动使用)，不过直接通过子类引用父类元素，不会引起子类的初始化
                6. Java虚拟机被标明为启动类的类(包含main方法的)
        4. **类与接口的初始化不同**，如果一个类被初始化，则其父类或父接口也会被初始化，但如果一个接口初始化，则不会引起其父接口的初始化。
    2. 反射
        1. **运行时类型信息(RTTI)**
            1. 并不是所有的Class都能在编译时明确，因此在某些情况下需要在运行时再发现和确定类型信息(比如：基于构建编程)，这就是RTTI(Runtime Type Information，运行时类型信息)。
            2. 在java中，有两种RTTI的方式，
                1. 一种是传统的，即假设在编译时已经知道了所有的类型；
                2. 还有一种，是利用反射机制，在运行时再尝试确定类型信息。
            3. 严格的说，反射也是一种形式的RTTI，不过，一般的文档资料中把RTTI和反射分开，因为一般的，大家认为RTTI指的是传统的RTTI，通过继承和多态来实现，在运行时通过调用超类的方法来实现具体的功能(超类会自动实例化为子类，或使用instance of)。
        2. **反射及实现方式**
            1. Java不允许在运行时改变程序结构或类型变量的结构，但它允许在运行时去探知、加载、调用在编译期完全未知的class，可以在运行时加载该class，生成实例对象(instance object)，调用method，或对field赋值。这种类似于"看透"了class的特性被称为反射(Reflection)，我们可以将反射直接理解为：可以看到自己在水中的倒影，这种操作与直接操作源代码效果相同，但灵活性高得多。
            2. 需要注意的有几点：
                1. 在java的反射机制中，getDeclaredMethod得到的是全部方法，getMethod得到的是公有方法；
                2. 反射机制的setAccessible可能会破坏封装性，可以任意访问私有方法和私有变量；
                3. setAccessible并不是将private改为public，事实上，public方法的accessible属性也是false的，setAccessible只是取消了安全访问控制检查，所以通过设置setAccessible，可以跳过访问控制检查，执行的效率也比较高。参考：
        3. **反射的性能** https://blog.csdn.net/l_serein/article/details/6219897
        4. **反射与设计模式** 反射的一个很重要的作用，就是在设计模式中的应用，包括在工厂模式和代理模式中的应用。
            1. 动态代理
                ```java
                // TODO
                ```
            2. 工厂模式
    3. 类加载机制
        1. 我们知道Android系统也是仿照java搞了一个虚拟机，不过它不叫JVM，它叫Dalvik/ART VM。Dalvik/ART VM 虚拟机加载类和资源也是要用到ClassLoader，不过Jvm通过ClassLoader加载的class字节码，而Dalvik/ART VM通过ClassLoader加载则是dex。Android的类加载器分为两种,PathClassLoader和DexClassLoader，两者都继承自BaseDexClassLoader。
            1. **PathClassLoader** 代码位于libcore\dalvik\src\main\Java\dalvik\system\PathClassLoader.java 。用来**加载系统类和应用类**。
            2. **DexClassLoader** 代码位于libcore\dalvik\src\main\java\dalvik\system\DexClassLoader.java 。用来**加载jar、apk、dex文件**，加载jar、apk也是最终抽取里面的Dex文件进行加载。
            3. **BaseDexClassLoader** 代码位于libcore\dalvik\src\main\java\dalvik\system\BaseDexClassLoader.java 。
            4. **ClassLoader** 代码位于java/lang/ClassLoader.java 。被BaseDexClassLoader所加载。
        2. **Dalvik虚拟机类加载流程**
            1. Dalvik虚拟机毕竟不算是标准的Java虚拟机，因此在类加载机制上，Dalvik虚拟机与Java虚拟机有许多不同之处，例如，在使用标准Java虚拟机时，我们经常自定义继承自ClassLoader的类加载器。然后通过defineClass方法来从一个二进制流中加载Class。然而，这在Dalvik虚拟机上是行不通的。
            2. Dalvik虚拟机类加载流程如下图所示：![Dalvik虚拟机类加载流程](https://upload-images.jianshu.io/upload_images/12972541-b2f0739d340718d7?imageMogr2/auto-orient/strip%7CimageView2/2/w/784/format/webp)
        3. **Dalvik虚拟机类加载器源码分析**
            1. Android的类加载器主要有两个PathClassLoader和DexClassLoader，其中PathClassLoader是默认的类加载器，下面我们就来说说两者的区别与联系。
                1. PathClassLoader：支持加载DEX或者已经安装的APK(因为存在缓存的DEX)。
                2. DexClassLoader：支持加载APK、DEX和JAR，也可以从SD卡进行加载。
            2. DexClassLoader和PathClassLoader都属于符合双亲委派模型的类加载器(因为它们没有重载loadClass方法)。也就是说，它们在加载一个类之前，回去检查自己以及自己以上的类加载器是否已经加载了这个类。如果已经加载过了，就会直接将之返回，而不会重复加载。
            3. 要加载一个类，必须先初始化一个类加载器实例，我们拿DexClassLoader来举例，它的构造方法如下所示
                ```java
                public DexClassLoader(String dexPath, String optimizedDirectory, String libraryPath, ClassLoader parent) {
                    super(dexPath, new File(optimizedDirectory), libraryPath, parent);
                    // dexPath 是加载APK、DEX和JAR的路径。这个类可以用于Android动态加载DEX/JAR。
                    // optimizedDirectory 是DEX的输出路径。
                    // libraryPath 加载DEX的时候需要用到的lib库，libraryPath一般包括/vendor/lib和/system/lib。
                    // parent DEXClassLoader指定的父类加载器
                }
                ```
            4. 关于DexClassLoader，除了它的构造函数以外，它的源码注释里还提到以下三点：
                1. 这个类加载器加载的文件是.jar或者.apk文件，并且这个.jar或.apk中是包含classes.dex这个入口文件的，主要是用来执行那些没有被安装的一些可执行文件的。
                2. 这个类加载器需要一个属于应用的私有的，可以的目录作为它自己的缓存优化目录，其实这个目录也就作为下面，这个构造函数的第二个参数，至于怎么实现，注释中也已经给出了答案；
                3. 不要把上面第二点中提到的这个缓存目录设为外部存储，因为外部存储容易收到代码注入的攻击。
            5. 通过DexClassLoader的构造函数，我们可以发现DexClassLoader的构造函数会调用父类的构造函数进行初始化，DexClassLoader的父类就是BaseDexXClassLoader，我们继续来看一下BaseDexClassLoader的构造函数
                ```java
                public BaseDexClassLoader(String dexPath, File optimizedDirectory, String libraryPath, ClassLoader parent) {
                    super(parent);
                    this.pathList = new DexPathList(this, dexPath, libraryPath, optimizedDirectory);
                }
                // 通过ClassLoader的构造函数源码可以发现，BaseDexClassLoader里的parentLoader对象经过层层传递，传递给了parent对象，parent对象是ClassLoader类里的私有变量。
                ```
            6. 这一步做完以后，BaseDexClassLoader的构造函数紧接着就初始化了一个DexPathList对象，这是一个描述DEX文相关资源文件的条目列表。可以看到DexPathList里比较重要dexElements也是在这里被初始化，热修复就是倒腾这个东东做到修复bug的。
                ```java
                public DexPathList(ClassLoader definingContext, String dexPath, String libraryPath, File optimizedDirectory) {
                    if (definingContext == null) {
                        throw new NullPointerException("definingContext == null");
                    }
                    if (dexPath == null) {
                        throw new NullPointerException("dexPath == null");
                    }
                    if (optimizedDirectory != null) {
                        if (!optimizedDirectory.exists())  {
                            throw new IllegalArgumentException("optimizedDirectory doesn't exist: " + optimizedDirectory);
                        }
                        if (!(optimizedDirectory.canRead() && optimizedDirectory.canWrite())) {
                            throw new IllegalArgumentException("optimizedDirectory not readable/writable: "  + optimizedDirectory);
                        }
                    }
                    this.definingContext = definingContext;
                    ArrayList<IOException> suppressedExceptions = new ArrayList<IOException>();
                    this.dexElements = makeDexElements(splitDexPath(dexPath), optimizedDirectory, suppressedExceptions);
                    if (suppressedExceptions.size() > 0) {
                        this.dexElementsSuppressedExceptions = suppressedExceptions.toArray(new IOException[suppressedExceptions.size()]);
                    } else {
                        dexElementsSuppressedExceptions = null;
                    }
                    this.nativeLibraryDirectories = splitLibraryPath(libraryPath);
                }
                ```
    4. 热修复机制
        1. 之前已经了解了Android类加载机制，知道在DexPathList里有个dexElements的数组源码中官方注释。热修复就是利用dexElements的顺序来做文章，当一个补丁的patch.dex放到了dexElements的第一位，那么当加载一个bug类时，发现在patch.dex中，则直接加载这个类，原来的bug类可能就被覆盖了。看下PathClassLoader代码
            ```java
            public class PathClassLoader extends BaseDexClassLoader {
                public PathClassLoader(String dexPath, ClassLoader parent) {
                    super(dexPath, null, null, parent);
                }
                public PathClassLoader(String dexPath, String libraryPath, ClassLoader parent) {
                    super(dexPath, null, libraryPath, parent);
                }
            }
            ```
        2. DexClassLoader代码
            ```java
            public class DexClassLoader extends BaseDexClassLoader {
                public DexClassLoader(String dexPath, String optimizedDirectory, String libraryPath, ClassLoader parent) {
                    super(dexPath, new File(optimizedDirectory), libraryPath, parent);
                }
            }
            ```
        3. BaseDexClassLoader
            ```java
            public class BaseDexClassLoader extends ClassLoader {
                private final DexPathList pathList;
                public BaseDexClassLoader(String dexPath, File optimizedDirectory, String libraryPath, ClassLoader parent) {
                    super(parent);
                    this.pathList = new DexPathList(this, dexPath, libraryPath, optimizedDirectory);
                }
                @Override
                protected Class<?> findClass(String name) throws ClassNotFoundException {
                    List<Throwable> suppressedExceptions = new ArrayList<Throwable>();
                    Class c = pathList.findClass(name, suppressedExceptions);
                    if (c == null) {
                        ClassNotFoundException cnfe = new ClassNotFoundException("Didn't find class \"" + name + "\" on path: " + pathList);
                        for (Throwable t : suppressedExceptions) {
                            cnfe.addSuppressed(t);
                        }
                        throw cnfe;
                    }
                    return c;
                }
                // ...
            }
            ```
        4. 在BaseDexClassLoader 构造函数中创建一个DexPathList类的实例,这个DexPathList的构造函数会创建一个dexElements 数组
            ```java
            public DexPathList(ClassLoader definingContext, String dexPath, String libraryPath, File optimizedDirectory) {
                // ... 
                this.definingContext = definingContext;
                ArrayList<IOException> suppressedExceptions = new ArrayList<IOException>();
                // 创建一个数组
                this.dexElements = makeDexElements(splitDexPath(dexPath), optimizedDirectory, suppressedExceptions);
                // ... 
            }
            ```
        5. 然后BaseDexClassLoader 重写了findClass方法,调用了pathList.findClass，跳到DexPathList类中.
            ```java
            public Class findClass(String name, List<Throwable> suppressed) {
                for (Element element : dexElements) {
                    // 初始化DexFile
                    DexFile dex = element.dexFile;
                    if (dex != null) {
                        // 调用DexFile类的loadClassBinaryName方法返回Class实例
                        Class clazz = dex.loadClassBinaryName(name, definingContext, suppressed);
                        if (clazz != null) {
                            return clazz;
                        }
                    }
                }       
                return null;
            }
            ```
        6. ClassLoader会遍历这个数组,然后加载这个数组中的dex文件。而ClassLoader在加载到正确的类之后,就不会再去加载有Bug的那个类了,我们把这个正确的类放在Dex文件中,让这个Dex文件排在dexElements数组前面即可。
        7. **CLASS_ISPREVERIFIED问题** 根据QQ空间谈到的在虚拟机启动的时候，在verify选项被打开的时候，如果static方法、private方法、构造函数等，其中的直接引用(第一层关系)到的类都在同一个dex文件中，那么该类就会被打上CLASS_ISPREVERIFIED标志，且一旦类被打上CLASS_ISPREVERIFIED标志其他dex就不能再去替换这个类。所以一定要想办法去阻止类被打上CLASS_ISPREVERIFIED标志。为了阻止类被打上CLASS_ISPREVERIFIED标志，QQ空间开发团队提出了一个方法是先将一个预备好的hack.dex加入到dexElements的第一项，让后面的dex的所有类都引用hack.dex其中的一个类，这样原来的class1.dex、class2.dex、class3.dex中的所有类都引用了hack.dex的类，所以其中的都不会打上CLASS_ISPREVERIFIED标志。
        8. Qzon团队的[安卓App热补丁动态修复技术介绍]()(这个一定要看!!!他是热修复元老级文章,也是本文重点抄袭对象😂😂😂)
    5. 四大热修复方案对比分析
        1. 实现套路
            1. 底层替换方案: 限制颇多，但时效性最好，加载轻快，立即见效。阿里系的AndFix、Sophix。
            2. 类加载方案: 时效性差，需要重新冷启动才能见效，但修复范围广，限制少。QZone超级补丁、微信Tinker。
        2. 分析方案对比: 虽然热修复的主要套路有两种，但是，由这两种套路延伸出来的各种不同的帮派有很多，其中闻名天下的有四大门派。QZone超级补丁、微信Tinker、阿里AndFix、美团Robust。综合他们的优劣进行对比如下。

            | 支撑/方案  | Tinker | QZone | AndFix | Robust |
            | :--------- | :----- | :---- | :----- | :----- |
            | 类替换     | yes    | yes   | no     | no     |
            | So替换     | yes    | no    | no     | no     |
            | 资源替换   | yes    | yes   | no     | no     |
            | 全平台支持 | yes    | yes   | yes    | yes    |
            | 即时生效   | no     | no    | yes    | yes    |
            | 性能损耗   | 较小   | 较大  | 较小   | 较小   |
            | 补丁包大小 | 较小   | 较大  | 一般   | 一般   |
            | 开发透明   | yes    | yes   | no     | no     |
            | 复杂度     | 较低   | 较低  | 复杂   | 复杂   |
            | gradle支持 | yes    | no    | no     | no     |
            | Rom体积    | 较大   | 较小  | 较小   | 较小   |
            | 成功率     | 较高   | 较高  | 一般   | 最高   |
        3. 总的来说
            1. AndFix作为native解决方案，首先面临��是稳定性与兼容性问题，更重要的是它无法实现类替换，它是需要大量额外的开发成本的；
            2. Robust兼容性与成功率较高，但是它与AndFix一样，无法新增变量与类只能用做的bugFix方案；
            3. Qzone方案可以做到发布产品功能，但是它主要问题是插桩带来Dalvik的性能问题，以及为了解决Art下内存地址问题而导致补丁包急速增大的。
            4. 特别是在Android N之后，由于混合编译的inline策略修改，对于市面上的各种方案都不太容易解决。而Tinker热补丁方案不仅支持类、So以及资源的替换，它还是2.X－8.X(1.9.0以上支持8.X)的全平台支持。利用Tinker我们不仅可以用做bugfix,甚至可以替代功能的发布。Tinker已运行在微信的数亿Android设备上，那么为什么你不使用Tinker呢？
    6. Qzone热更新原理 https://www.jianshu.com/p/248e3efa2233
        1. 超级补丁技术基于DEX分包方案，使用了多DEX加载的原理，大致的过程就是：把BUG方法修复以后，放到一个单独的DEX里，插入到dexElements数组的最前面，让虚拟机去加载修复完后的方法。当patch.dex中包含Test.class时就会优先加载，在后续的DEX中遇到Test.class的话就会直接返回而不去加载，这样就达到了修复的目的。
        2. 但是有一个问题是，当两个调用关系的类不在同一个DEX时，就会产生异常报错。我们知道，在APK安装时，虚拟机需要将classes.dex优化成odex文件，然后才会执行。在这个过程中，会进行类的verify操作，如果调用关系的类都在同一个DEX中的话就会被打上CLASS_ISPREVERIFIED的标志，然后才会写入odex文件。所以，为了可以正常地进行打补丁修复，必须避免类被打上CLASS_ISPREVERIFIED标志，具体的做法就是单独放一个类在另外DEX中，让其他类调用。
        3. 我们来逆向手机QQ空间APK看一下具体的实现: 先进入程序入口QZoneRealApplication，在attachBaseContext中进行了两步操作：修复CLASS_ISPREVERIFIED标志导致的unexpected DEX problem异常、加载修复的DEX。
        4. **修复Unexpected DEX Problem异常**：可以看到，这里是要加载一个libs目录下的dalvikhack.jar。在项目的assets/libs找到该文件，解压得到’classes.dex’文件，逆向打开该DEX文件，通过不同的DEX加载进来，然后在每一个类的构造方法中引用其他DEX中的唯一类AnitLazyLoad，避免类被打上CLASS_ISPREVERIFIED标志。在无修复的情况下，将DO_VERIFY_CLASSES设置为false，以提高性能。只有在需要修复的时候，才设置为true。
        5. **加载修复的DEX**：从loadPatchDex()方法进入，经过几次跳转，到达核心的代码段，SystemClassLoaderInjector.c()。由于进行了混淆和多次方法的跳转，于是将核心代码段做了如下整理：修复的步骤为：
            1. 可以看出是通过获取到当前应用的Classloader，即为BaseDexClassloader
            2. 通过反射获取到他的DexPathList属性对象pathList
            3. 通过反射调用pathList的dexElements方法把patch.dex转化为Element[]
            4. 两个Element[]进行合并，把patch.dex放到最前面去
            5. 加载Element[]，达到修复目的
        6. 整体的流程图如下：<br>![手机QQ空间超级补丁技术流程图](https://upload-images.jianshu.io/upload_images/12972541-b2ae7f760b7b5577.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/540/format/webp)
        7. **优势**: 没有合成整包(和微信Tinker比起来)，产物比较小，比较灵活。可以实现类替换，兼容性高。(某些三星手机不起作用)
        8. **不足**: 
            1. 不支持即时生效，必须通过重启才能生效。
            2. 为了实现修复这个过程，必须在应用中加入两个dex!dalvikhack.dex中只有一个类，对性能影响不大，但是对于patch.dex来说，修复的类到了一定数量，就需要花不少的时间加载。对手淘这种航母级应用来说，启动耗时增加2s以上是不能够接受的事。
            3. 在ART模式下，如果类修改了结构，就会出现内存错乱的问题。为了解决这个问题，就必须把所有相关的调用类、父类子类等等全部加载到patch.dex中，导致补丁包异常的大，进一步增加应用启动加载的时候，耗时更加严重。
    7. Tinker热更新原理 https://www.jianshu.com/p/076afb5cdd55
        1. 微信针对QQ空间超级补丁技术的不足提出了一个提供DEX差量包，整体替换DEX的方案。主要的原理是与QQ空间超级补丁技术基本相同，区别在于不再将patch.dex增加到elements数组中，而是差量的方式给出patch.dex，然后将patch.dex与应用的classes.dex合并，然后整体替换掉旧的DEX文件，以达到修复的目的。
        2. 整体的流程如下：<br>![微信Tinker流程图](https://upload-images.jianshu.io/upload_images/12972541-f2cb858b7be646e7.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/540/format/webp)
        3. **优势**：
            1. 合成整包，不用在构造函数插入代码，防止verify，verify和opt在编译期间就已经完成，不会在运行期间进行。
            2. 性能提高。兼容性和稳定性比较高。
            3. 开发者透明，不需要对包进行额外处理。
        4. **不足**：
            1. 与超级补丁技术一样，不支持即时生效，必须通过重启应用的方式才能生效。
            2. 需要给应用开启新的进程才能进行合并，并且很容易因为内存消耗等原因合并失败。
            3. 合并时占用额外磁盘空间，对于多DEX的应用来说，如果修改了多个DEX文件，就需要下发多个patch.dex与对应的classes.dex进行合并操作时这种情况会更严重，因此合并过程的失败率也会更高。
    8. AndFix热更新原理 https://www.jianshu.com/p/343fed808714
        1. 阿里百川推出的热修复HotFix服务，相对于QQ空间超级补丁技术和微信Tinker来说，定位于紧急BUG修复的场景下，能够最及时的修复BUG，下拉补丁立即生效无需等待。<br><img src="https://upload-images.jianshu.io/upload_images/12972541-f0d54182a73637ed.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1000/format/webp" alt="HotFix与AndFix的关系"/>
        2. AndFix实现原理：AndFix不同于QQ空间超级补丁技术和微信Tinker通过增加或替换整个DEX的方案，提供了一种运行时在Native修改Filed指针的方式，实现方法的替换，达到即时生效无需重启，对应用无性能消耗的目的。原理图如下: <br>![AndFix原理图](https://upload-images.jianshu.io/upload_images/12972541-28a13845c55a8c4f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1000/format/webp)
        3. AndFix实现过程：对于实现方法的替换，需要在Native层操作，经过三个步骤：
            1. setup: 打开链接库获取操作句柄，获取Native层内部函数，得到ClassObject对象。
            2. setFieldFlag: 修改访问权限为public。
            3. replaceMethod: 得到新旧方法的指针。新方法指向目标方法，实现方法的替换。
        4. 接下来以Dalvik设备为例，来分析具体的实现过程：
            1. setup: 对于Dalvik来说，遵循JIT即时编译机制，需要在运行时装载libdvm.so动态库，获取以下内部函数：
                1. dvmThreadSelf()：查询当前的线程；
                2. dvmDecodeIndirectRef()：根据当前线程获得ClassObject对象。
            2. setFieldFlag: 该操作的目的：把 private、protected的方法和字段都改为public，这样才可被动态库看见并识别，因为动态库会忽略非public属性的字段和方法。
            3. replaceMethod: 核心步骤，替换流程如下: <br>![replaceMethod流程图](https://upload-images.jianshu.io/upload_images/12972541-99a9bf7ca652c87f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1000/format/webp)
        5. AndFix对ART设备同样支持，具体的过程与Dalvik相似，这里不再赘述。
        6. **优点**：
            1. BUG修复的即时性
            2. 补丁包同样采用差量技术，生成的PATCH体积小
            3. 对应用无侵入，几乎无性能损耗
        7. **缺点**：
            1. 不支持新增字段，以及修改<init\>方法，也不支持对资源的替换。
            2. 由于厂商的自定义ROM，对少数机型暂不支持。
    9. Robust热更新原理 https://www.jianshu.com/p/07209d40dd0c
        1. Robust是美团点评团队在2017年3月开源的热修复框架，和阿里的AndFix不同，Robust不用依赖JNI层，直接通过Java层代码就可以实现热修复。相比于其他热修复框架，官方给出Robust的优势有以下几点
            1. 支持Android2.3-7.X版本
            2. 高兼容性、高稳定性，修复成功率高达三个九
            3. 补丁下发立即生效，不需要重新启动
            4. 支持方法级别的修复，包括静态方法
            5. 支持增加方法和类
            6. 支持ProGuard的混淆、内联、优化等操作
        2. 不接触JNI层，Robust是如何添加方法与类、立即生效其补丁的呢？Robust一共分为四个模块，分别为：
            1. autopatchbase(热补丁基类)
            2. gradle-plugin(负责apk包的插桩)
            3. auto-patch-plugin(负责提取制作patch包)
            4. patch(负责补丁包的补丁工作)
        3. **AutoPatchBase**: 作为热补丁的基类，主要类是有几个：
            1. 2个注解分别为@Add（添加新的类）和@Modify（修改当前类的方法）；
            2. 一个Constant类用来保存固定的字符串；
            3. 一个ChangeQuickRedirect接口，用来给plugin确认当前类是否需要patch
        4. **Gradle-Plugin**: 用于插桩的工具。首先进行对Apk检查防止包被篡改，然后在RobustTransform.groovy中
            1. 执行apply(...)方法，读取项目目录下的robust.xml加载热补丁的配置
            2. 进入transform(...)方法，依次读取bootClasspath下的所有class文件并加入ClassPool中
            3. 进入insertRobustCode方法，然后做了以下几件微小的工作：
                1. 将class设置为public
                2. 当class为接口/无方法类时，执行5
                3. 给class插入一个public static的ChangeQuickRedirect对象
                4. 对所有方法使用Javassist插入代码：当该方法的changeQuickRedirect不为空时，直接将参数直接传入PatchProxy的accessDispatchVoid/accessDispatch方法并返回，这样做跳过了原方法后面的代码，从而实现了方5. 法的替换
                6. 写入原来的class文件中
                7. 打包压缩生成apk
        5. **Auto-Patch-Plugin**: 制作patch包的工具。主要逻辑在AutoPatchTransform.groovy中，
            1. 执行apply(…)方法，初始化参数
            2. 跳到transform(…)中，又做了细微的工作
                1. 复制项目中的LIB_NAME_ARRAY中的3个jar包到./robust/文件夹下(unknown why)
                2. 读取bootClasspath路径下的class文件并转换为CtClass对象数组
                3. 执行打包autoPatch(…)
                    1. 首先执行ReadAnnonation(…)去读取CtClass数组中的注解，然后把注解的方法/类放在Config中保存
                    2. 执行ReadMapping.initMappingInfo()，读取mapping.txt将被ProGuard混淆了的类的对象还原成原来的类
                    3. 通过InlineClassFactory构造新加的类
                    4. 处理super的方法调用
                    5. 针对每一个有补丁方法的类，使用PatchesFactory.createPatch构造出Patch实现类
                    6. 使用PatchesControlFactory.createPatchesControl构造PatchControl类
                    7. 使用PatchesInfoFactory.createPatchesInfo构造PatchInfo类
                    8. 重新打包，优化smali
        6. **Patch**:
            1. 在activity中，通过执行以下代码运行了补丁
                ```java
                new PatchExecutor(getApplicationContext(), new PatchManipulateImp(), new Callback()).start();
                ```
            2. PatchExecutor是一个Thread的子类，通过PatchManipulateImp指定的路径去读patch文件，然后给DexClassLoader加载并读取PatchInfo，然后通过PatchInfo中的信息获得需要补丁的类，通过反射修改其changeQuickRedirect对象的值，做到修改函数运行的路径。
        7. **总结**
            1. 原理图: <br>![robust原理图](https://upload-images.jianshu.io/upload_images/12972541-28b797ef08251e81.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/600/format/webp)
            2. 当然原理看起来简单，其中还是有很多难点在其中，例如
                1. 如何解决patch中涉及到的包访问权限
                2. 如何解决super的问题
                3. …
            3. 各位对具体实现有兴趣的，可以通过解压官方demo中的补丁包，用JD-GUI来看看patch包中各种patchInfo、patchControl是如何处理的
    10. 自己写一个Android热修复 https://www.jianshu.com/p/b65e5da3dff2
        1. 根据原理，我们先来写一个热修复的核心类：有了上面的原理分析，这个类也肯定不会太复杂，主要用到的是Java的反射以及ClassLoader(DexClassLoader以及PathClassLoader)。
            ```java
            public final class HotFix {
                private static void injectDexToClassLoader(Context context, String fixDexFilePath)  // fixDexFilePath是要修复的文件的路径
                        throws ClassNotFoundException, NoSuchFieldException, IllegalAccessException {
                    //读取 baseElements
                    PathClassLoader pathClassLoader = (PathClassLoader) context.getClassLoader();
                    Object basePathList = getPathList(pathClassLoader);
                    Object baseElements = getDexElements(basePathList);
                    //读取 fixElements
                    String baseDexAbsolutePath = context.getDir("dex", 0).getAbsolutePath();
                    DexClassLoader fixDexClassLoader = new DexClassLoader(
                            fixDexFilePath, baseDexAbsolutePath, fixDexFilePath, context.getClassLoader());
                    Object fixPathList = getPathList(fixDexClassLoader);
                    Object fixElements = getDexElements(fixPathList);
                    //合并两份Elements
                    Object newElements = combineArray(baseElements, fixElements);
                    //一定要重新获取，不要用basePathList，会报错
                    Object basePathList2 = getPathList(pathClassLoader);
                    //新的dexElements对象重新设置回去
                    setField(basePathList2, basePathList2.getClass(), "dexElements", newElements);
                }
                private static Object getPathList(Object obj) throws ClassNotFoundException, NoSuchFieldException, IllegalAccessException {
                    return getField(obj, Class.forName("dalvik.system.BaseDexClassLoader"), "pathList");
                }
                private static Object getDexElements(Object obj) throws NoSuchFieldException, IllegalAccessException {
                    return getField(obj, obj.getClass(), "dexElements");
                }
                private static Object getField(Object obj, Class cls, String str) throws NoSuchFieldException, IllegalAccessException {
                    Field declaredField = cls.getDeclaredField(str);
                    declaredField.setAccessible(true);
                    return declaredField.get(obj);
                }
                private static void setField(Object obj, Class cls, String str, Object obj2) throws NoSuchFieldException, IllegalAccessException {
                    Field declaredField = cls.getDeclaredField(str);
                    declaredField.setAccessible(true);
                    declaredField.set(obj, obj2);
                }
                private static Object combineArray(Object baseElements, Object fixElements) {
                    // 合拼dexElements ,并确保 fixElements 在 baseElements 之前
                    Class componentType = fixElements.getClass().getComponentType();
                    int length = Array.getLength(fixElements);
                    int length2 = Array.getLength(baseElements) + length;
                    Object newInstance = Array.newInstance(componentType, length2);
                    for (int i = 0; i < length2; i++) {
                        if (i < length) {
                            Array.set(newInstance, i, Array.get(fixElements, i));
                        } else {
                            Array.set(newInstance, i, Array.get(baseElements, i - length));
                        }
                    }
                    return newInstance;
                }
            }
            ```
        2. 
        3. 
        4. 
        5. 
    11. links:
        * [Android学习——手把手教你实现Android热修复](https://blog.csdn.net/u013132758/article/details/80954639) finished
        * [Android热修复手动实现](https://blog.csdn.net/Small_Lee/article/details/80770450)
2. 
3. 

## 自定义View

0. 链接
    0. [Android layout属性大全](https://blog.csdn.net/ican87/article/details/37566679)
1. 从种类上看所有View:
    1. View implements Drawable.Callback, KeyEvent.Callback, AccessibilityEventSource:
        1. id/size: id / layout_height / layout_width / maxheight / minheight / maxwidth / minwidth / layout_margin / layout_padding
        2. 内容: 
            0. foregroundGravity / background / contentDescription / theme / tag / gravity / layout_gravity / saveEnabled(是否保存内容，需要设置id) / visibility
            1. **foreground**(只在Android6版本以上以及FrameLayout本身及其子类才有效，可以设置单击时的前景)
            2. **drawingCacheQuality**(绘制view时需要的质量:auto/high/low)
            3. **duplicateParentState**(是否直接从父容器中获取绘图状态(光标，按下等，但不包括事件))
            4. **fitsSystemWindows**(设置布局调整时是否考虑系统窗口(如状态栏))
        3. scroll: 
            0. fadingEdgeLength / scrollbars(none/vertical/horizontal) / scrollbarSize / scrollbarStyle / scrollbarThumbVertical / scrollbarTrackVertical / scrollbarAlwaysDrawVerticalTrack
            1. **fadingEdge**(设置滚动时边框渐变的方向:none/horizontal/vertical)
            2. **requiresFadingEdge**(定义滚动时边缘是否褪色)
            3. **fadeScrollbars**(滚动条是否自动隐藏)
            4. **overScrollMode**(滑动到边界时样式)
            5. **verticalScrollbarPosition**(垂直滚动条的位置:left/right/none/defaultPosition)
            6. **scrollbarFadeDuration**
            7. **scrollbarThumbHorizontal**(设置水平滚动条的drawable)
            8. **scrollbarTrackHorizontal**(设置水平滚动条背景(轨迹)的色drawable)
            9. **scrollbarAlwaysDrawHorizontalTrack**(设置水平滚动条是否含有轨道) 
        4. focus:
            0. focusable / nextFocusUp / nextFocusLeft / nextFocusRight / nextFocusForward(设置指定视图获得下一个焦点，必须是id)
            1. **focusableInTouchMode**(https://blog.csdn.net/u010015108/article/details/52796785 https://www.jianshu.com/p/c90c8e502028)
            2. **nextFocusDown**
        6. touch: 
            1. **soundEffectsEnabled**(点击或触摸是否有声音效果)
            2. **hapticFeedbackEnabled**(触力反馈https://blog.csdn.net/love_xsq/article/details/50290485)
            3. **importantForAccessibility**(控制View是否能启用无障碍功能，false是不能启用无障碍功能，为视觉障碍用户提供朗读服务子类的)
            4. **filterTouchesWhenObscured**(https://www.jianshu.com/p/06574d8f10bf 如果该view被一个view覆盖了，则点击上面的view时不会发生点击穿透bug)
        7. child: 
            0. layout_gravity
            1. **clipChildren**(设置为false后子控件的绘制可以超出父控件的范围)
            2. **clipToPadding**(false后子控件可以在父控件padding内绘制)
        5. 属性: 
            0. clickable / longClickable / onClick / onLongClick / alpha / rotation / rotationX / rotationY / scaleX / scaleY / scrollX / scrollY / style / transformX / transformY / transformPivotY / 
            2. **transformPivotX**(相对于一点的水平方向偏转量)
        6. 应用:
            1. View淡入淡出设置(ScrollView/ListView等都适用): lvArticle.setVerticalFadingEdgeEnabled(true); lvArticle.setFadingEdgeLength(100);
            2. listview在拖动的时候背景图片消失变成黑色背景。等到拖动完毕我们自己的背景图片才显示出来: android:scrollingCache="false" / android:cacheColorHint="#00000000"
            3. listview的上边和下边有黑色的阴影: android:fadingEdge="none" / android:overScrollMode="never"
            4. lsitview的每一项之间需要设置一个图片做为间隔: android:divider="@drawable/list_driver"
            5. 默认会显示选中的item为橙黄底色，有时候我们需要去掉这种效果: listSelector="@android:color/transparent"
            6. 在项目中，一进入一个页面, EditText默认就会自动获取焦点: 在EditText的父级控件中找一个，设置成android:focusable="true"; android:focusableInTouchMode="true"; 可以截断EditText默认的行为
    2. Common:
        1. TextView extends View implements ViewTreeObserver.OnPreDrawListener [Android 9.0关于字体的新特性](https://blog.csdn.net/u013894711/article/details/81532638)
            1. drawable: drawableBottom / drawableTop / drawableStart / drawableEnd / drawableRight / drawableLeft / drawablePadding
            2. style:
                1. **textAllCaps**(自动将字符变为大写，但是Spannable就会失效???)
                2. **bufferType**(normal/spannable/editable 指定getText()方式取得的文本类别，其中editable可通过获取文本为textview追加内容???)
                3. **capitalize**(设置英文字母大写类型。此处无效果，需要弹出输入法才能看得到)
                4. **cursorVisible**(光标是否显示)
            3. font:
                0. fontFamily
            3. text1:
                0. editable | enable | lastBaselineToBottomHeight | inputType | marqueenRepeatLimit | maxEms | minEms | maxLength
                1. **digits**(设置允许输入哪些字符，如"1234567890.+-*/% ()")
                2. **editorExtras**(设置文本的额外的输入数据)
                3. **ellipsize**(start(省略号位置)/end/middle/marquee(跑马灯) 当文字过长时,该控件该如何显示)
                4. **ems**(将对应的控件宽度设为指定个数字符的宽度)
                5. **firstBaselineToTopHeight**(https://blog.csdn.net/u013894711/article/details/81532638 TextView上边界和第一条baseline间的距离，该属性可替代top padding)
                6. **inputMethod**(为文本指定输入法，需要完全限定名(完整的包名))
                7. **scrollHorizontally**(文本超出TextView的宽度的情况下，是否出现横拉条)
            4. text2:
                0. hint | text | textColor | textColorHint | textColorLink | textSize | textStyle | textCursorDrawable | textIsSelectable | textScaleX
                1. **freezesText**(设置保存文本的内容以及光标的位置)
                2. **numeric**(如果被设置，该TextView有一个数字输入法。此处无用，设置后唯一效果是TextView有点击效果)
                3. **password**(以小点"."显示文本)
                4. **phoneNumber**(设置为电话号码的输入方式)
                5. **selectAllOnFocus**(如果文本是可选择的，让他获取焦点而不是将光标移动为文本的开始位置或者末尾位置。 TextView中设置后无效果)
                6. **textColorHighlight**(被选中文字的底色，默认为蓝色)
                7. **typeface**(设置文本字体)
            5. ime(软键盘):
                1. **imeActionId**(设置要获取的软键盘的view的id)
                2. **imeActionLabel**(设置获取的id的值)
                3. **imeOptions**(actionGo/actionSend/actionSearch/actionDone/normal/actionUnspecified/actionPrevious/actionNext/actionNone/... https://blog.csdn.net/lastdream/article/details/24365633)
                4. **privatedImeOptions**(设置输入法选项，此处无用，在EditText将进一步讨论)
            6. line:
                0. lineHight(API 28) | maxLines | minLines | singleLine
                1. **lineSpacingExtra**(行间距，而且是不包括字体大小等等的，是添加的间距，5.0后对最后一行无效)
                2. **lineSpacingMultiplier**(将行间距设定为行高的倍数，5.0后对最后一行无效 https://blog.csdn.net/etwge/article/details/72818859)
                3. **lines**(设置文本的行数，设置两行就显示两行，即使第二行没有数据)
            7. auto: 
                0. autoSizeMinTextSize | linksClickable
                1. **autoText**(如果设置，将自动执行输入值的拼写纠正。此处无效果，在显示输入法并输入的时候起作用)
                2. **autoLink**(none/web/email/phone/map/all https://www.jianshu.com/p/d3bef8449960)
                3. **autoSizeMaxTextSize**(自动设置字体大小时最大的字体大小，需要配合autoSizeStepGranularity与autoSizeTextType)
                4. **autoSizePresetSizes**(@array/autosize_text_sizes，配合autoSizeTextType使用)
                5. **autoSizeStepGranularity**(字体大小变化的粒度)
                6. **autoSizeTextType**(none/uniform(字体大小自适应width与height，如果没有其他属性会占据整个width与height))
            8. shadow:
                0. shadowColor(需要与shadowRadius一起使用) | shadowDy
                1. **shadowDx**(设置阴影横向坐标开始位置)
                2. **shadowRadius**(设置阴影的半径。设置为0.1就变成字体的颜色了，一般设置为3.0的效果比较好)
        2. Button extends TextView
            1. 
2. 从继承上看所有View:
    1. 

## 蓝牙/wifi

[android wifi操作大全](https://blog.csdn.net/q908555281/article/details/48546417)
[android开发中Wifi功能总结](https://blog.csdn.net/qq_34773981/article/details/79163579)
[android wifi/蓝牙系列](https://blog.csdn.net/a1533588867/article/list/2?)
[Android 蓝牙开发之搜索、配对、连接、通信大全](https://www.cnblogs.com/lanzhi/p/6467243.html) [android bluetooth——蓝牙的开启、搜索、配对与连接](https://blog.csdn.net/yehui928186846/article/details/52710112)
[Android 蓝牙篇](https://blog.csdn.net/zqf_888/article/details/81060606)
[Android蓝牙开发系列文章](https://blog.csdn.net/huangliniqng/article/details/82185635)

## 地图



## 插件化


## usb挂载

https://blog.csdn.net/new_abc/article/details/53006327

## Arouter

0. links
    * [Arouter解析](https://my.oschina.net/JiangTun?tab=newest&catalogId=3687878)
    * [Android模块开发之APT技术](https://www.jianshu.com/p/9616f4a462bd)
1. 基本使用与页面祖册源码解析
    1. Google提供的原声路由主要是通过intent，可以分成显示和隐式两种。显示的方案会导致类之间的直接依赖问题，耦合严重；隐式intent需要的配置清单中统一声明，首先有个暴露的问题，另外在多模块开发中协作也比较困难。只要调用startActivity后面的环节我们就无法控制了，在出现错误时无能为力，而ARouter可以在跳转过程中进行拦截，出现错误时可以实现降级策略。
        1. 官方宣称的ARouter的优势
            * 直接解析URL路由，解析参数并赋值
            * 支持多模块项目
            * 支持InstantRun
            * 允许自定义拦截器，支持多个拦截器且定义拦截顺序
            * ARouter可以提供IoC容器
            * 映射关系自动注册
            * 灵活的降级策略，支持用户指定全局降级与局部降级策略
            * 支持MultiDex
            * 支持第三方 App 加固(使用 arouter-register 实现自动注册)
            * 支持生成路由文档
            * 提供 IDE 插件便捷的关联路径和目标类
            * 支持获取Fragment
            * 页面、拦截器、服务等组件均自动注册到框架
            * 映射关系按组分类、多级管理，按需初始化
            * 支持多种方式配置转场动画
            * 完全支持Kotlin以及混编(配置见文末)
        2. 典型应用
            * 从外部URL映射到内部页面，以及参数传递与解析
            * 跨模块页面跳转，模块间解耦
            * 拦截跳转过程，处理登陆、埋点等逻辑
            * 跨模块API调用，通过控制反转来做组件解耦
    2. ARouter配置
        * 在使用之前需要先配置gradle
            ```groovy
            android {
                defaultConfig {
                    ...
                    javaCompileOptions {
                        annotationProcessorOptions {
                            arguments = [AROUTER_MODULE_NAME: project.getName()]
                        }
                    }
                }
            }
            dependencies {
                // 替换成最新版本, 需要注意的是api
                // 要与compiler匹配使用，均使用最新版可以保证兼容
                compile 'com.alibaba:arouter-api:x.x.x'
                annotationProcessor 'com.alibaba:arouter-compiler:x.x.x'
                ...
            }
            // 旧版本gradle插件(< 2.2)，可以使用apt插件，配置方法见文末'其他#4'
            // Kotlin配置参考文末'其他#5'
            ```
        * 接着需要尽早的初始化ARouter，可以考虑在Application中进行初始化
            ```java
            if (isDebug()) {           // 这两行必须写在init之前，否则这些配置在init过程中将无效
                ARouter.openLog();     // 打印日志
                ARouter.openDebug();   // 开启调试模式(如果在InstantRun模式下运行，必须开启调试模式！线上版本需要关闭,否则有安全风险)
            }
            ARouter.init(mApplication); // 尽可能早，推荐在Application中初始化
            ```
    3. activity页面之间跳转
        * 首先需要在支持路由的页面上添加注解，路径path至少需要有两级，比如我们需要跳转到Test2Activity,那么需要在activity上面配置path,具体内容不一定是/test/activity2，可以自由发挥。
            ```java
            @Route(path = "/test/activity2")  // 其实最好将path的内容变为一个Constants.java文件里面的，这样更加解耦
            public class Test2Activity extends AppCompactActivity
            ```
        * 然后直接像下面这样就行了，build中的参数就是上面配置的路径。
            ```java
            ARouter.getInstance().build("/test/activity2").navigation();
            ARouter.getInstance().build("/test/activity2").withString("key1", "value1").navigation();  // 携带参数
            ```
        * 如果希望实现类似startActivityForResult呢？只需要在navigation中传入两个参数，第一个就是Context，第二个参数是requestCode。
            ```java
            ARouter.getInstance().build("/test/activity2").withString("key1", "value1").navigation(this, 999);
            ```
        * 在Test2Activity中就可以传递结果
            ```java
            setResult(int resultCode)
            // or
            setResult(int resultCode, Intent data)
            ```
        * 然后我们就可以在onActivityResult中得到数据，根据requestCode可以拿到数据。
    4. APT技术
        * APT，就是Annotation Processing Tool 的简称，就是可以在代码编译期间对注解进行处理，并且生成Java文件，减少手动的代码输入。这里我们就不多做介绍，这个不太清楚的可以参考我之前的分享[Android模块开发之APT技术](https://www.jianshu.com/p/9616f4a462bd)。
    5. SPI技术
    6. 页面注册源码解析

## Agora Platform

[agorq io](https://www.agora.io/cn/)

## APT/SPI

1. links
    * [【Android】APT](https://www.jianshu.com/p/7af58e8e3e18)
    * [反射注解与动态代理综合使用](https://www.jianshu.com/p/fad15887a05e) finished
    * [javapoet github](https://github.com/square/javapoet) finished
    * [JavaPoet 看这一篇就够了](https://juejin.im/entry/58fefebf8d6d810058a610de) finished
    * [Android模块开发之APT技术](https://www.jianshu.com/p/9616f4a462bd)
    * [Android模块开发之SPI](https://www.jianshu.com/p/deeb39ccdc53)
2. spi
    1. 
3. javapoet
    1. javapoet是square公司良心出品，让我们脱离手动凭借字符串来生成Java类的痛苦，可以通过各种姿势来生成Java类。一个Java文件由四部分组成
        1. 包名
        2. 类
        3. 属性
        4. 方法
    2. 对应到JavaPoet中也就是
        ```java
        JavaFile.builder("liang.example.lib",
            TypeSpec.classBuilder(...)
                .addField(FieldSpec...)
                .addMethod(MethodSpec...)
                .build())
            .build();
        ```
    3. 实例
        ```java
        ClassName hoverboard = ClassName.get("com.mattel", "Hoverboard");  // 这个类可以不必存在
        ClassName list = ClassName.get("java.util", "List");
        ClassName arrayList = ClassName.get("java.util", "ArrayList");
        TypeName listOfHoverboards = ParameterizedTypeName.get(list, hoverboard);
        ClassName namedBoards = ClassName.get("com.mattel", "Hoverboard", "Boards");
        MethodSpec hexDigit = MethodSpec.methodBuilder("hexDigit")
            .addModifiers(Modifier.PUBLIC, Modifier.STATIC)
            .addParameter(int.class, "i")
            .returns(char.class)
            .addStatement("return (char) (i < 10 ? i + '0' : i - 10 + 'a')")
            .build();
        ```
        ```java
        MethodSpec main = MethodSpec.methodBuilder("main")
            .addModifiers(Modifier.PUBLIC, Modifier.STATIC)
            .returns(void.class)
            .addParameter(String[].class, "args")
            // one statement
            .addStatement("$T.out.println($S)", System.class, "Hello, JavaPoet!")
            // mangy statements / 有大括号的
            .addCode("int total = 0;\n"  // .addStatement("int total = 0")
                + "for (int i = 0; i < 10; i++) {\n"  // .beginControlFlow("for (int i = 0; i < 10; i++)")
                + "    total += i;\n"  // .addStatement("total += i")
                + "}\n")  // endControlFlow()
            // 多个大括号的
            .addStatement("long now = $T.currentTimeMillis()", System.class)
            .beginControlFlow("if ($T.currentTimeMillis() < now)", System.class)
            .addStatement("$T.out.println($S)", System.class, "Time travelling, woo hoo!")
            .nextControlFlow("else if ($T.currentTimeMillis() == now)", System.class)
            .addStatement("$T.out.println($S)", System.class, "Time stood still!")
            .nextControlFlow("else")
            .addStatement("$T.out.println($S)", System.class, "Ok, time still moving forward")
            .endControlFlow()
            // try-catch
            .beginControlFlow("try")
            .addStatement("throw new Exception($S)", "Failed")
            .nextControlFlow("catch ($T e)", Exception.class)
            .addStatement("throw new $T(e)", RuntimeException.class)
            .endControlFlow()
            // 自定义导入类
            .addStatement("$T result = new $T<>()", listOfHoverboards, arrayList)
            .addStatement("result.add(new $T())", hoverboard)
            .addStatement("result.add(new $T())", hoverboard)
            // 添加其他 MethodSpec
            .addStatement("int b = 10")
            .addStatement("char[] result = new char[2]")
            .addStatement("result[0] = $N((b >>> 4) & 0xf)", hexDigit)
            .addStatement("result[1] = $N(b & 0xf)", hexDigit)
            .addStatement("String byteToHex = new String(result)")
            .build();
            // $L for literals 可以接收 int / String / ...，不会有任何的改变(不会转义)
            // $T for types 可以通过 Class 来指定，会自动生成import
            // $S for strings 可以接受 String，可以接收引号和转义
            // $N for Names
        ```
        ```java
        TypeSpec helloWorld = TypeSpec.classBuilder("HelloWorld")
            .addModifiers(Modifier.PUBLIC, Modifier.FINAL)
            .addMethod(main)
            .build();
        JavaFile javaFile = JavaFile.builder("com.example.helloworld", helloWorld)
            .addStaticImport(hoverboard, "createNimbus")  // 静态导包
            .addStaticImport(namedBoards, "*")
            .addStaticImport(Collections.class, "*")
            .build();
        javaFile.writeTo(System.out);  // 可以写入流，或者调用javaFile.toString()作为字符串
        // CodeBlock.builder().add("I ate $2L $1L", "tacos", 3) 等价于
        // CodeBlock.builder().add("I ate $L $L", 3, "tacos")
        // 甚至可以
        // Map<String, Object> map = new LinkedHashMap<>();
        // map.put("food", "tacos");
        // map.put("count", 3);
        // CodeBlock.builder().addNamed("I ate $count:L $food:L", map)
        ```
        ```java
        // MethodSpec flux = MethodSpec.constructorBuilder()
        //     .addModifiers(Modifier.PUBLIC)
        //     .addParameter(String.class, "greeting")
        //     .addStatement("this.$N = $N", "greeting", "greeting")
        //     .build();
        // FieldSpec android = FieldSpec.builder(String.class, "android")
        //     .addModifiers(Modifier.PRIVATE, Modifier.FINAL)
        //     .build();
        // FieldSpec android = FieldSpec.builder(String.class, "android")
        //     .addModifiers(Modifier.PRIVATE, Modifier.FINAL)
        //     .initializer("$S + $L", "Lollipop v.", 5.0d)
        //     .build();
        // TypeSpec helloWorld = TypeSpec.interfaceBuilder("HelloWorld")
        //     .addModifiers(Modifier.PUBLIC)
        //     .addField(FieldSpec.builder(String.class, "ONLY_THING_THAT_IS_CONSTANT")
        //         .addModifiers(Modifier.PUBLIC, Modifier.STATIC, Modifier.FINAL)
        //         .initializer("$S", "change")
        //         .build())
        //     .addMethod(MethodSpec.methodBuilder("beep")
        //         .addModifiers(Modifier.PUBLIC, Modifier.ABSTRACT)
        //         .build())
        //     .build();
        // TypeSpec helloWorld = TypeSpec.enumBuilder("Roshambo")
        //     .addModifiers(Modifier.PUBLIC)
        //     .addEnumConstant("ROCK", TypeSpec.anonymousClassBuilder("$S", "fist")
        //         .addMethod(MethodSpec.methodBuilder("toString")
        //             .addAnnotation(Override.class)
        //             .addModifiers(Modifier.PUBLIC)
        //             .addStatement("return $S", "avalanche!")
        //             .returns(String.class)
        //             .build())
        //         .build())
        //     .addEnumConstant("SCISSORS", TypeSpec.anonymousClassBuilder("$S", "peace")
        //         .build())
        //     .addEnumConstant("PAPER", TypeSpec.anonymousClassBuilder("$S", "flat")
        //         .build())
        //     .addField(String.class, "handsign", Modifier.PRIVATE, Modifier.FINAL)
        //     .addMethod(MethodSpec.constructorBuilder()
        //         .addParameter(String.class, "handsign")
        //         .addStatement("this.$N = $N", "handsign", "handsign")
        //         .build())
        //     .build();
        // TypeSpec comparator = TypeSpec.anonymousClassBuilder("")
        //     .addSuperinterface(ParameterizedTypeName.get(Comparator.class, String.class))
        //     .addMethod(MethodSpec.methodBuilder("compare")
        //         .addAnnotation(Override.class)
        //         .addModifiers(Modifier.PUBLIC)
        //         .addParameter(String.class, "a")
        //         .addParameter(String.class, "b")
        //         .returns(int.class)
        //         .addStatement("return $N.length() - $N.length()", "a", "b")
        //         .build())
        //     .build();
        // MethodSpec logRecord = MethodSpec.methodBuilder("recordEvent")
        //     .addModifiers(Modifier.PUBLIC, Modifier.ABSTRACT)
        //     .addAnnotation(AnnotationSpec.builder(Headers.class)
        //         .addMember("accept", "$S", "application/json; charset=utf-8")
        //         .addMember("userAgent", "$S", "Square Cash")
        //         .build())
        //     .addParameter(LogRecord.class, "logRecord")
        //     .returns(LogReceipt.class)
        //     .build();
        // MethodSpec dismiss = MethodSpec.methodBuilder("dismiss")
        //    .addJavadoc("Hides {@code message} from the caller's history. Other\n"
        //        + "participants in the conversation will continue to see the\n"
        //        + "message in their own history unless they also delete it.\n")
        //    .addJavadoc("\n")
        //    .addJavadoc("<p>Use {@link #delete($T)} to delete the entire\n"
        //        + "conversation for all participants.\n", Conversation.class)
        //    .addModifiers(Modifier.PUBLIC, Modifier.ABSTRACT)
        //    .addParameter(Message.class, "message")
        //    .build();
        ```
    4. 生成的Java文件
        ```java
        // 生成的
        package com.example.helloworld;
        import static com.mattel.Hoverboard.Boards.*;
        import static com.mattel.Hoverboard.createNimbus;
        import static java.util.Collections.*;
        import com.mattel.Hoverboard;
        import java.util.ArrayList;
        import java.util.List;
        public final class HelloWorld {
            public static char hexDigit(int i) {
                return (char) (i < 10 ? i + '0' : i - 10 + 'a');
            }
            public static void main(String[] args) {
                System.out.println("Hello, JavaPoet!");
                int total = 0;
                for (int i = 0; i < 10; i++) {
                    total += i;
                }
                long now = System.currentTimeMillis();
                if (System.currentTimeMillis() < now)  {
                    System.out.println("Time travelling, woo hoo!");
                } else if (System.currentTimeMillis() == now) {
                    System.out.println("Time stood still!");
                } else {
                    System.out.println("Ok, time still moving forward");
                }
                try {
                    throw new Exception("Failed");
                } catch (Execption e) {
                    throw new RuntimeException(e);
                }
                List<Hoverboard> result = new ArrayList<>();
                result.add(new Hoverboard());
                result.add(new Hoverboard());
                int b = 10;
                char[] result = new char[2];
                result[0] = hexDigit((b >>> 4) & 0xf);
                result[1] = hexDigit(b & 0xf);
                String byteToHex = new String(result);
            }
        }
        ```
    5. 关键类
        * TypeSpec
        * FieldSpec
        * MethodSpec
        * ParameterSpec
        * AnnotationSpec
        * JavaFile
        * ClassName
        * TypeName
        * ParameterizedTypeName
        * CodeBlock
4. apt
    1. APT，就是 Annotation Processing Tool 的简称，就是可以在代码编译期间对注解进行处理，并且生成Java文件，减少手动的代码输入。注解我们平时用到的比较多的可能会是运行时注解，比如大名鼎鼎的retrofit就是用运行时注解，通过动态代理来生成网络请求。编译时注解平时开发中可能会涉及的比较少，但并不是说不常用，比如我们经常用的轮子Dagger2, ButterKnife, EventBus3 都在用，所以要紧跟潮流来看看APT技术的来龙去脉。
    2. 实例
        1. Route
            ```java
            @Target(ElementType.TYPE)
            @Retention(RetentionPolicy.CLASS)
            public @interface Route {
                String name();
            }
            ```
        2. RouteProcessor
            ```java
            public class RouteProcessor extends AbstractProcessor {
                // init()方法可以初始化拿到一些使用的工具，比如文件相关的辅助类 Filer;元素相关的辅助类Elements;日志相关的辅助类Messager;
                @Override
                public synchronized void init(ProcessingEnvironment processingEnvironment) { super.init(processingEnvironment); }
                // getSupportedSourceVersion()方法返回 Java 版本;
                @Override
                public SourceVersion getSupportedSourceVersion() { return SourceVersion.latestSupported(); }
                // getSupportedAnnotationTypes()方法返回要处理的注解的结合;
                @Override
                public Set<String> getSupportedAnnotationTypes() { return super.getSupportedAnnotationTypes(); }
                // 上面几个方法写法基本都是固定的，重头戏是process()方法。
                @Override
                public boolean process(Set<? extends TypeElement> set, RoundEnvironment roundEnvironment) { return false; }
            }
            ```

## QPython

[Python on Android](http://www.qpython.com/)

## EventBus源码阅读

[浅析EventBus 3.0实现思想](https://www.jianshu.com/p/7f982f294fc2)
[EventBus后续深入知识点整理](https://www.jianshu.com/p/f8fd67eef9aa)
[EventBus中HandlerPoster,BackgroundPoster,AsyncPoster的执行流程](https://blog.csdn.net/qq_18242391/article/details/81030270)
[EventBus3.0注意事项](https://blog.csdn.net/zhangquanit/article/details/52817332)

1. Poster 接口: enqueue(Subscription, Object Event)
    1. AsyncPoster 类: 实现了 Runnable 接口与 Poster 接口
        1. 成员: PendingPostQueue queue; EventBus eventBus;
        2. 方法: AsyncPoster(EventBus eventBus); enqueue(会调用eventBus.getExecutorService().execute(this)进而将run方法放入队列); run;
    2. BackgroundPoster 类: 实现了 Runnable 接口与 Poster 接口
        1. 成员: PendingPostQueue queue; EventBus eventBus; boolean executorRunning(用于判断现在是否还在陷入while的run中，如果没有了就run一下);
        2. 方法: BackgroundPoster(EventBus eventBus); enqueue; run;
        3. 与 AsyncPoster 对比: enqueue后每一秒都会poll一个出来invokeSubscriber，如果poll到null了才会又在enqueue中调用eventBus.getExecutorService().execute(this)，否则甚至不用调用，速度应该会更快些，适合**持续的长期的event**。
    3. HandlerPoster 类: 实现了 Handler 抽象类与 Poster 接口
        1. 成员: PendingPostQueue queue; EventBus eventBus; int **maxMillisInsideHandleMessage**(当处理Message时长超过这个时就不会再处理了???); boolean handlerActive;
        2. 方法: HandlerPoster(EventBus, Looper, int maxMillisInsideHandleMessage); enqueue; handleMessage(Message); 
2. Subscription 接口: 
    1. 成员: Object subscriber; SubscriberMethod method; boolean active;
    2. 方法: Subscription(Object subscriber, SubscriberMethod); boolean equals(Object other); int hashCode();
3. SubscriberMethod 类: 
    1. 成员: 
        1. String methodString; Method method; Class<?> eventType;
        2. ThreadMode mode; boolean sticky; int priority;
    2. 方法: equals / hashCode
4. SubscriberMethodFinder 类: 
    1. 成员: 
        1. static final int MODIFIERS_IGNORE = Modifier.ABSTRACT | Modifier.STATIC | BRIDGE | SYNTHETIC;
        2. static final Map<Class<?>, List<SubscriberMethod>> METHOD_CACHE = new ConcurrentHashMap<>();
        3. List<SubscriberInfoIndex> subscriberInfoIndexes;
        4. final boolean strictMethodVerification;
        5. final boolean ignoreGeneratedIndex;
        6. static final int POOL_SIZE = 4;
        7. static final FindState[] FIND_STATE_POOL = new FindState[POOL_SIZE];
    2. 方法: 
        1. SubscriberMethodFinder(List<SubscriberInfoIndex> subscriberInfoIndexes, boolean strictMethodVerification, boolean ignoreGeneratedIndex);
        2. private FindState prepareFindState(); private SubscriberInfo getSubscriberInfo(FindState findState); private List<SubscriberMethod> getMethodsAndRelease(FindState findState);
        3. List<SubscriberMethod> findSubscriberMethods(Class<?> subscriberClass);
        4. private List<SubscriberMethod> findUsingInfo(Class<?> subscriberClass);  // 在**apt**中查找
        5. private List<SubscriberMethod> findUsingReflection(Class<?> subscriberClass);  // 通过反射获取
        6. private void findUsingReflectionInSingleClass(FindState findState);  // 通过反射在一个类中获取
        7. static void clearCaches();
        8. 
    3. 静态内部类 FindState 
        1. 成员: 
            1. List<SubscriberMethod> subscriberMethods = new ArrayList<>();
            2. Map<Class, Object> anyMethodByEventType = new HashMap<>();
            3. Map<String, Class> subscriberClassByMethodKey = new HashMap<>();
            4. StringBuilder methodKeyBuilder = new StringBuilder(128);
            5. Class<?> subscriberClass; Class<?> clazz; boolean skipSuperClasses; SubscriberInfo subscriberInfo;
        2. 方法: 
            1. void initForSubscriber(Class<?> subscriberClass); void recycle();
            2. boolean checkAdd(Method method, Class<?> eventType); private boolean **checkAddWithMethodSignature**(Method method, Class<?> eventType);
            3. void moveToSuperclass();
5. 辅助类: 
    1. SubscriberInfo 接口:
        1. Class<?> getSubscriberClass();
        2. SubscriberMethod[] getSubscriberMethods();
        3. SubscriberInfo getSuperSubscriberInfo();
        4. boolean shouldCheckSuperclass();
    2. SubscriberInfoIndex 接口: SubscriberInfo getSubscriberInfo(Class<?> subscriberClass);
    3. AbstractSubscriberInfo 抽象类: 实现了 SubscriberInfo 接口
        1. 成员: Class subscriberClass; Class<? extends SubscriberInfo> superSubscriberInfoClass; boolean shouldCheckSuperclass;
        2. 方法: 
            1. AbstractSubscriberInfo(Class subscriberClass, Class<? extends SubscriberInfo> superSubscriberInfoClass, boolean shouldCheckSuperclass);
            2. Class getSubscriberClass(); SubscriberInfo getSuperSubscriberInfo(); boolean shouldCheckSuperclass();
            3. protected: SubscriberMethod createSubscriberMethod(String methodName, Class<?> eventType); SubscriberMethod createSubscriberMethod(String methodName, Class<?> eventType, ThreadMode threadMode); SubscriberMethod createSubscriberMethod(String methodName, Class<?> eventType, ThreadMode threadMode, int priority, boolean sticky);
    4. SimpleSubscriberInfo 类: 继承了 AbstractSubscriberInfo 抽象类
        1. 成员: final SubscriberMethodInfo[] methodInfos;
        2. 方法: 
            1. public SimpleSubscriberInfo(Class subscriberClass, boolean shouldCheckSuperclass, SubscriberMethodInfo[] methodInfos);
            2. synchronized SubscriberMethod[] getSubscriberMethods();
    5. SubscriberMethodInfo 类: 
        1. 成员: String methodName; ThreadMode threadMode; Class<?> eventType; int priority; boolean sticky;
        2. 方法: 
            1. public SubscriberMethodInfo(String methodName, Class<?> eventType, ThreadMode threadMode, int priority, boolean sticky);
            2. public SubscriberMethodInfo(String methodName, Class<?> eventType);
            3. public SubscriberMethodInfo(String methodName, Class<?> eventType, ThreadMode threadMode);
6. ThreadMode 枚举: POSTING / MAIN / MAIN ORDERED / BACKGROUND / ASYNC
7. Subscribe 注释: ThreadMode threadMode() default ThreadMode.POSTING; boolean sticky() default false; int priority() default 0; 
8. PendingPost 类: 
    1. 成员: Object event; Subscription subscription; PendingPost next;
    2. 方法: PendingPost(Object event, Subscription); static obtainPendingPost(Subscription , Object event); static releasePendingPost(PendingPost pendingPost);
9. PendingPostQueue 类: 
    1. 成员: PendingPost head, tail;
    2. 方法: synchronized enqueue(PendingPost pendingPost); synchronized PendingPost poll(); synchronized PendingPost poll(int maxMillisToWait);
10. Logger 接口: 
    1. 方法: log(Level level, String msg); log(Level level, String msg, Throwable th);
    2. 内部实现类: 
        1. JavaLogger:
            1. 成员: java.util.logging.Logger logger;
            2. 方法: JavaLogger(String tag); ...
        2. SystemOutLogger: 使用 System.out
    3. 外部实现类: 
        1. AndroidLogger
            1. final boolean ANDROID_LOG_AVAILABLE; final String tag;
            2. static boolean isAndroidLogAvailable(); ...; private int mapLevel(Level level);
11. MainThreadSupport 接口: 
    1. 方法: boolean isMainThread(); Poster createPoster(EventBus eventBus);
    2. 内部实现类: AndroidHandlerMainThreadSupport
        1. 成员: Looper looper;
        2. 方法: AndroidHandlerMainThreadSupport(Looper looper); boolean isMainThread(); Poster createPoster(EventBus eventBus){HandlerPost(eventBus, looper, 10)};
12. 异常: 
    1. EventBusException 类: 继承了 RuntimeException
        1. 方法: EventBusException(String detailMessage); EventBusException(Throwable throwable); EventBusException(String detailMessage, Throwable throwable);
    2. NoSubscriberEvent 类: 其实不是异常，只是无法找到 subscriber 的event与对应的eventBus
        1. 属性: EventBus eventBus; Object originalEvent;
        2. 方法: NoSubscriberEvent(EventBus eventBus, Object originalEvent);
    3. SubscriberExceptionEvent 类: 其实也不是异常，只是 subscriber 处理改event时有错误抛出而已
        1. 属性: EventBus eventBus; Throwable throwable; Object causingEvent; Object causingSubscriber;
        2. 方法: SubscriberExceptionEvent(EventBus eventBus, Throwable throwable, Object causingEvent, Object causingSubscriber);
13. EventBusBuilder 类: 
    1. 成员: 
        1. static ExecutorService DEFAULT_EXECUTOR_SERVICE = Executors.newCachedThreadPool();
        2. boolean logSubscriberExceptions = true;
        3. boolean logNoSubscriberMessages = true;
        4. boolean sendSubscriberExceptionEvent = true;
        5. boolean sendNoSubscriberEvent = true;
        6. boolean throwSubscriberException;
        7. boolean **eventInheritance** = true;
        8. boolean **ignoreGeneratedIndex**;
        9. boolean **strictMethodVerification**;
        10. ExecutorService executorService = DEFAULT_EXECUTOR_SERVICE;
        11. List<Class<?>> skipMethodVerificationForClasses;
        12. List<SubscriberInfoIndex> subscriberInfoIndexes;
        13. Logger logger;
        14. MainThreadSupport mainThreadSupport;
    2. 方法: 
        1. EventBusBuilder(){ /\*nothing\*/ }
        2. logSubscriberExceptions(boolean); logNoSubscriberMessages(boolean); sendSubscriberExceptionEvent(boolean); sendNoSubscriberEvent(boolean); throwSubscriberException(boolean); eventInheritance(boolean); ignoreGeneratedIndex(boolean); strictMethodVerification(boolean);
        3. executorService(ExecutorService); skipMethodVerificationFor(Class<?>); addIndex(SubscriberInfoIndex); logger(Logger); 
        4. Logger getLogger(); MainThreadSupport getMainThreadSupport(); Object getAndroidMainLooperOrNull(); 
        5. EventBus installDefaultEventBus(); EventBus build(); 
14. EventBus 类: 
    1. 成员: 
        1. static String TAG = "EventBus"; 
        2. static volatile EventBus defaultInstance;
        3. static final EventBusBuilder DEFAULT_BUILDER = new EventBusBuilder();
        4. static final Map<Class<?>, List<Class<?>>> eventTypesCache = new HashMap<>();
        5. final Map<Class<?>, CopyOnWriteArrayList<Subscription>> subscriptionsByEventType;
        6. final Map<Object, List<Class<?>>> typesBySubscriber;
        7. final Map<Class<?>, Object> stickyEvents;
        8. final ThreadLocal<PostingThreadState> currentPostingThreadState;
        9. 
        10. final MainThreadSupport mainThreadSupport;
        11. final Poster mainThreadPoster;
        12. final BackgroundPoster backgroundPoster;
        13. final AsyncPoster asyncPoster;
        14. final SubscriberMethodFinder subscriberMethodFinder;
        15. final ExecutorService executorService;
        16. 
        17. final boolean logSubscriberExceptions;
        18. final boolean logNoSubscriberMessages;
        19. final boolean sendSubscriberExceptionEvent;
        20. final boolean sendNoSubscriberEvent;
        21. final boolean throwSubscriberException;
        22. final boolean eventInheritance;
        23. 
        24. final int indexCount;
        25. final Logger logger;
    2. 方法: 
        1. static: EventBus getDefault(); EventBusBuilder builder(); clearCaches();
        2. EventBus(); EventBus(EventBusBuilder); 
        3. register(Object subscriber); synchronized void unregister(Object subscriber); synchronized boolean isRegistered(Object subscriber);
        4. private void subscribe(Object subscriber, SubscriberMethod); private void checkPostStickyEventToSubscription(Subscription, Object stickyEvent); private void unsubscribeByEventType(Object subscriber, Class<?> eventType);
        5. void post(Object event); void cancelEventDelivery(Object event);
        6. void postSticky(Object event); T getStickyEvent(Class<T> eventType); T removeStickyEvent(Class<T> eventType); boolean removeStickyEvent(Object event); removeAllStickyEvents();
        7. boolean hasSubscriberForEvent(Class<?> eventClass);
        8. private void postSingleEvent(Object event, PostingThreadState postingState); private boolean postSingleEventForEventType(Object event, PostingThreadState postingState, Class<?> eventClass); private void postToSubscription(Subscription subscription, Object event, boolean isMainThread);
        9. void invokeSubscriber(PendingPost pendingPost); void invokeSubscriber(Subscription subscription, Object event);
        10. private void handleSubscriberException(Subscription subscription, Object event, Throwable cause);
        11. private static List<Class<?>> lookupAllEventTypes(Class<?> eventClass); static void addInterfaces(List<Class<?>> eventTypes, Class<?>[] interfaces);
        12. ExecutorService getExecutorService(); Logger getLogger(); toString();
    3. 内部: 
        1. final static class PostingThreadState:
            1. final List<Object> eventQueue = new ArrayList<>();
            2. boolean isPosting;
            3. boolean isMainThread;
            4. Subscription subscription;
            5. Object event;
            6. boolean canceled;
        2. interface PostCallback: void onPostCompleted(List<SubscriberExceptionEvent> exceptionEvents); 还未实现
15. **注意事项**
    1. @Subscribe method must have exactly 1 parameter;
    2. @Subscribe method: must be public, non-static, and non-abstract;
    3. 父类中定义的订阅方法不能被重写，因为 SubscriberMethodFinder.FindState 类中的 checkAdd();
    4. EventBus是支持事件继承的订阅的
        ```java
        public interface EventInterface {}
        public class FatherEvent implements EventInterface {}
        public class ChildEvent extends FatherEvent {}

        @Subscribe(threadMode = ThreadMode.MAIN)
        public void onEventFather(FatherEvent fatherEvent) {}
        @Subscribe(threadMode = ThreadMode.MAIN)
        public void onEventChild(ChildEvent childEvent) {}
        @Subscribe(threadMode = ThreadMode.MAIN)
        public void onEventInterface(EventInterface eventInterface) {}

        // 当我们调用EventBus.getDefault().post(new ChildEvent())事件时，上面三个方法都可以监听到。因为ChildEvent继承FatherEvent，FatherEvent又实现了EventInterface接口。
        // 当我们调用 EventBus.getDefault().post(new FatherEvent()); 事件时,则订阅了FatherEvent和EventInterface接口的方法可以监听到。
        // 也就是说，发送的事件时，如果该事件的父类或实现的接口被订阅，则也可以监听到。
        ```
    5. 事件过滤: EventBus是基于事件的，也就是订阅方法参数，用户要关心不同的事件，就需要定义不同的事件对象。
    6. 不支持跨进程: 目前EventBus只支持跨线程，而不支持跨进程。如果一个app的service起到了另一个进程中，那么注册监听的模块则会收不到另一个进程的EventBus发出的事件。

## RxJava

0. links
    * [RxJava/RxAndroid 使用实例实践](https://www.jianshu.com/p/031745744bfa)
    * [Android Rxjava：这是一篇 清晰 & 易懂的Rxjava 入门教程](https://www.jianshu.com/p/a406b94f3188)
    * [Rxjava github](https://github.com/ReactiveX/RxJava)
    * [Rxandroid github](https://github.com/ReactiveX/RxAndroid)
    * [RxXxx 官网](http://reactivex.io/documentation/operators.html)
    * [RxBinding github](https://github.com/JakeWharton/RxBinding)
    * **[RxJava系列目录1](https://www.jianshu.com/p/d22cbc05152e)**
    * **[RxJava系列目录2](https://blog.csdn.net/niubitianping/article/category/6736107)**
    * **[RxJava系列目录3](https://so.csdn.net/so/search/s.do?q=%E7%8E%8B%E5%AD%A6%E5%B2%97RxJava&t=blog&u=qczg_wxg)**
    * **[RxJava系列目录4](https://maxwell-nc.github.io/android/rxjava2-1.html)**
1. RxJava引入
    1. 响应式编程介绍(Reactive programming): 不是一种API，而是一种新的非常有用的范式。而RxJava就是一套基于此思想的框架，在Android开发中我们通过这个框架就能探索响应式的世界。同时结合另一个库，RxAndroid，这是一个扩展库，更好的兼容了Android特性，比如主线程，UI事件等。一般的程序是这样的，表达式只会计算一次，然后把赋值给变量。如下，在a重新赋值后，前面的c并不会变化，而响应式编程会对值的变化做出响应。
        ```java
        int a = 2;
        int b = 3;
        int c = a * b;	// c is 6
        a = 10;			// c is still 6
        ```
    2. 依赖
        ```groovy
        implementation 'io.reactivex.rxjava2:rxandroid:2.1.1'
        implementation 'io.reactivex.rxjava2:rxjava:2.2.10'
        ```
    3. RxJava Observable [【java】Observer和Observable详解](https://blog.csdn.net/u012250875/article/details/77747878)
        1. RxJava使用的是观察者模式，其中有两个关键的接口：Observable和Observer。当Observable（被观察的对象）状态改变，所有subscribed（订阅）的Observer（观察者）会收到一个通知。在Observable的接口中有一个方法subscribe()，这样Observer可以调用来进行订阅。同样，在Observer接口中有三个方法，会被Observable回调：
            - onNext(T value) 提供了一个 T 类型的item给Observer
            - onComplete() 在Observable发送items结束后通知Observer
            - onError(Throwable e) 当Observable发生错误时通知Observer
        2. 作为一个表现良好的Observable，发射0到多个数据时后面都会跟上一个completion或是error的回调。一个网络请求observable通常只发射一个数据并且立刻completes。在一个observable已经结束后不能再发射新的item数据。
    4. RxJava Observable2
        1. 可以直接通过Observable.create()创建一个Observable：``Observable<T> create(ObservableOnSubscribe<T> source)``。ObservableOnSubscribe是一个接口，里面只有一个方法``void subscribe(ObservableEmitter<T> emitter) throws Exception;``。而RxJava中的Emitter接口和Observer比较相似，都有以下方法
            ```java
            public interface Emitter<T> {
                void onNext(T value);
                void onError(Throwable error);
                void onComplete();
            }
            ```
        2. ObservableEmitter提供了一个方法用来取消订阅，用一个实际场景来形容一下。想象一个水龙头和水流，这个管道就相当于Observable，从里面能放出水，ObservableEmitter就相当于是水龙头，控制开关，而水龙头连接到管道就是Observable.create()。
2. 实例
    1. 创建Observable
        ```java
        private Observable<String> createButtonClickObservable() {  // 1
            return Observable.create(new ObservableOnSubscribe<String>() {  // 2
                @Override public void subscribe(final ObservableEmitter<String> emitter) throws Exception {  // 3
                    mSearchButton.setOnClickListener(new View.OnClickListener() {  // 4
                        @Override public void onClick(View view) {
                            emitter.onNext(mQueryEditText.getText().toString());  // 5
                        }
                    });
                    emitter.setCancellable(new Cancellable() {  // 6
                        @Override public void cancel() throws Exception {  // 7
                            mSearchButton.setOnClickListener(null);
                        }
                    });
                }
            });
        }
        ```
    2. 上面这段代码做了以下几件事情
        - 定义了一个方法会返回一个Observable，泛型是String类型。
        - 通过Observable.create()创建了一个observable，并提供了一个ObservableOnSubscribe。
        - 在参数的内部类中覆写了subscribe()方法。
        - 给搜索按钮mSearchButton添加了一个点击事件。
        - 当点击事件触发时，调用emitter的onNext方法，并传递了当前mQueryEditText的值。
        - 在Java中保持引用容易造成内存泄漏，在不再需要的时候及时移除listeners是一个好习惯，那么这里怎么移除呢？ObservableEmitter有一个setCancellable()方法。通过重写cancel()方法，然后当Observable被处理的时候这个实现会被回调，比如已经结束或者是所有的观察者都解除了订阅。
        - 通过setOnClickListener(null)来移除监听。
    3. 创建Observer
        ```java
        @Override
        protected void onStart() {
            super.onStart();
            createButtonClickObservable().subscribe(new Consumer<String>() {
                @Override public void accept(String query) throws Exception {
                    showResult(mCheeseSearchEngine.search(query));
                }
            });
        }
        ```
3. RxJava知识1
    1. 通过subscribeOn和observeOn两个操作符能改变线程的执行状态。subscribeOn在操作链上最好只调用一次，如果多次调用，依然只有第一次生效。subscribeOn用来指定observable在哪个线程上创建执行操作，如果想要通过observables发射事件给Android的View，那么需要保证订阅者在Android的UI线程上执行操作。另一方面，observeOn可以在链上调用多次，它主要是用来指定下一个操作在哪一个线程上执行。
    2. 线程模型例子
        ```java
        myObservable // observable will be subscribed on i/o thread
            .subscribeOn(Schedulers.io())
            .observeOn(AndroidSchedulers.mainThread())
            .map(/* this will be called on main thread... */)
            .doOnNext(/* ...and everything below until next observeOn */)
            .observeOn(Schedulers.io())
            .subscribe(/* this will be called on i/o thread */);
            // -----------------
            observable.subscribeOn(Schedulers.io()/Schedulers.computation()/Schedulers.immediate()/
                Schedulers.newThread()/AndroidSchedulers.mainThread());
            observable.observeOn(...);
            observable.map(new Function<type, returnType>() {  // 数据类型转换，如 [1, 2, 3, 4] -> [1, 4, 9, 16]
                @Override
                public returnType apply(type parameter) throws Exception {}
            });
            observable.subscribe(new Consumer<T>() {
                @Override
                public void accept(T datas) {}
            });
            observable.doOnNext(new Consumer<T>() {});
            observable.filter(new Predicate<String>() {
                @Override
                public boolean test(String query) throws Exception {
                    return query.length() >= 2;
                }
            });
            observable.debounce(1000, TimeUnit.MILLISECONDS);
        ```
    3. schedulers介绍
        - Schedulers.io(): 适合I/O类型的操作，比如网络请求，磁盘操作。
        - Schedulers.computation(): 适合计算任务，比如事件循环或者回调处理。
        - AndroidSchedulers.mainThread(): 回调主线程，比如UI操作。
        - Schedulers.immediate(): 直接在当前线程运行，相当于不指定线程。这是默认的Scheduler。
        - Schedulers.newThread(): 总是启用新线程，并在新线程执行操作。
    4. 订阅周期: 前面我们实现过setCancellable方法，这个方法会在解除订阅的时候回调。Observable.subscribe()会返回一个Disposable，Disposable是一个接口，可以调用dispose方法解除订阅。
4. RxJava知识2
    1. 操作符: Create https://www.jianshu.com/p/d27a8588b379
        * just: 触发 onNext
        * empty: 触发 onComplete
        * error: 触发 onError
        * never: 什么都不触发，除了都会触发的 onSubscribe
        * formArray/fromIterable: 遍历触发onNext，最后触发onComplete
        * fromCallable: 当有观察者订阅时，从 Callable 的回调方法里获取要发射的数据。注意该 Callable 要放到如线程池中调用。
        * fromFuture: 产生 Future 的 Callable/... 需要放到线程池中调用，然后如果超时了会调用 onError ，否则调用 onNext 和 onComplete
        * fromPublisher: 使用 Publisher 接口，感觉与 ObservableOnSubscribe 类似
        * defer: 推迟创建，直到当观察者订阅时才创建，并且针对每个观察者创建都是一个新的 Observable。
        * **generate**: create 每次可以发射多个事件，而 generate 是每次只能发送一个事件，连续调用多次 onNext 会抛出 IllegalStateException 异常。但注意，只是一次回调中调用一次。可以多次调用回调的，只要满足条件。而且 onNext 可以与 onComplete/onError 配合使用。可以看看链接， generate 是可以分为无状态和有状态的，而且好像都是死循环，会一直调用，直到调用了 onComplete 。
        * interval: 每隔固定时长调用 onNext 发送一个 long 值，从 0 开始。默认在计算线程发射。
        * intervalRange: 和 interval 类似，只是不一定是每次加1，可以自定义
        * range/rangeLong: 发射一个整数序列。区别一个是 int，一个是 long 。和 interval 的区别可能在于 range/rangeLong 没有固定时长。
        * timer: 在一个给定的延迟后发射一个特殊的值。默认在 Schedulers.computation() 线程。可以配合其他的 Observable ，如配合 rangeLong 模拟 interval 。
        * unsafeCreate: create 的参数是 ObservableOnSubscribe ，发射器是 ObservableEmitter 。unsafeCreate 的参数是 ObservableSource ，参数是 Observer 。相当于 1.x 时代的 create，没什么用。
        * wrap: 和 unsafe 的区别，主要在 source instanceof Observable ，一个抛出异常，一个返回，返回时做了个类型转换，不知道怎么用。
        * compose: 接收 ObservableTransformer 对象，可以对一个 Observable 做一系列的链式调用，可以复用。
        * observable.repeat/repeatUntil/repeatWhen: 重复调用 observable 的回调，多次甚至无数次。
    2. 操作符: Transform https://www.jianshu.com/p/b00e4fb27296
        * buffer: 按照规定大小缓存，每次取 count 个数，取完一次跳过 skip 个数，将每次取的数据合并到一个列表里。
        * window: 和 buffer 类似，但不是变成一个个列表发射，而是多个 Observable，每个 Observable 发射一个子集。
        * blockingIterable
        * blockingForEach
        * blockingLatest
        * blockingMostRecent
        * blockingNext
        * blockingSubscribe
        * cast
        * map
        * flatMap
        * flatMapIterable
        * flatMapCompletable
        * flatMapMaybe
        * flatMapSingle
        * switchMap/switchMapDelayError/switchMapSingle/switchMapSingleDelayError
        * concatMap/concatMapEager
        * concatMapDelayError/concatMapEagerDelayError
        * concatMapIterable
        * concatMapCompletable
        * forEach
        * forEachWhile
        * groupBy
        * safeSubscribe
        * scan/scanWith
        * sorted
        * to
        * toList
        * toSortedList
        * toMap
        * toMultimap
        * toFlowable
        * toFuture
5. RxJava知识3
    1. 操作符: Filter
        * blockingFirst/blockingLast
        * blockingSingle
        * distinct
        * distinctUntilChanged
        * elementAt/elementAtOrError/firstElement/first/firstOrError/lastElement/last/lastOrError
        * filter
        * ofType
        * ignoreElements
        * singleElements
        * single/singleOrError
        * skip/skipLast/skipUntil/skipWhile
        * take/takeLast/takeUntil/takeWhile
        * debounce/throttleWithTimeout
        * sample/throttleLast
        * throttleFirst
    2. 操作符: Combine
        * combineLatest
        * combineLatestDelayError
        * withLatestFrom
        * merge/mergeDelayError/mergeArray/mergeArrayDelayError/mergeWith
        * switchOnNext/switchOnNextDelayError
        * zip/zipArray/zipIterable/zipWith
        * join/groupJoin
        * startWith/startWithArray
    3. 操作符: Utility
        * using
        * delay
        * delaySubscription
        * materialize/dematerialize
        * doOnSubscribe/doOnNext/doAfterNext/doOnTerminate/doAfterTerminate/doOnError/doOnComplete/doOnDispose/doFinally/doOnLifecycle/doOnEach
        * onTerminateDetach
        * serialize
        * subscribe/subscribeWith
        * timeInterval
        * timestamp
        * timeout
    4. 操作符: Error Handle
        * onErrorResumeNext
        * onErrorReturn/onErrorReturnItem
        * onExceptionResumeNext
        * retry/retryUntil/retryWhen
6. RxJava知识4
    1. 操作符: Conditional and Boolean
        * amb/ambArray/ambWith
        * sequenceEqual
        * all
        * any
        * contains
        * isEmpty
        * defaultIfEmpty
        * switchIfEmpty
    2. 操作符: Mathematical and Aggregate
        * concat/concatDelayError/concatArray/concatArrayDelayError
        * concatEager/concatArrayEager
        * concatWith
        * collect/collectInto
        * count
        * reduce/reduceWith
    3. Connectable
        * cache/cacheWithInitialCapacity
        * publish
        * replay
        * share
7. RxJava总结
    1. Observable
        1. amb / ambArray / create
    2. public interface Observer<T>
        1. onNext / onComplete / onError / onSubscribe(Disposable d): 刚开始时调用，用于解除订阅。
    2. public interface Subscriber<T>
        1. onNext / onComplete / onError
        2. onSubscribe(Subscription s)
    3. basic
        1. Disposable: isDispose / dispose
        2. Subscription: request / cancel
        3. SafeSu...
    4. lambda
        1. Consumer: accept
        2. ObservableSource: subscribe
        3. Cancellable: cancel
        4. Action: run
        5. ObservableOnSubscribe: subscribe
    5. public interface emitter<T>
        1. onNext(T t) / onComplete / onError(Throwable t)
    6. public interface ObservableEmitter<T>
        1. setDisposable(Disposable d) / isDisposed
        2. setCancellable(Cancellable c)
        3. serialize
        4. tryOnError(Throwable t)

## Gson

1. links
    * [你真的会用Gson吗?Gson使用指南（一）](https://www.jianshu.com/p/e740196225a4)
    * [搞定Gson泛型封装](https://www.jianshu.com/p/d62c2be60617)
    * [Gson github](https://github.com/google/gson)
    * [HashMap and gson](https://stackoverflow.com/questions/2779251/how-can-i-convert-json-to-a-hashmap-using-gson)
2. 基础1
    1. Gson的基本用法: Gson提供了fromJson() 和toJson() 两个直接用于解析和生成的方法，前者实现反序列化，后者实现了序列化。同时每个方法都提供了重载方法，我常用的总共有5个。
        1. 基本数据类型的解析
            ```java
            Gson gson = new Gson();
            int i = gson.fromJson("100", int.class);  // 100
            double d = gson.fromJson("\"99.99\"", double.class);  // 99.99
            boolean b = gson.fromJson("true", boolean.class);  // true
            String str = gson.fromJson("String", String.class);  // String
            ```
        2. 基本数据类型的生成
            ```java
            String jsonNumber = gson.toJson(100);  // 100
            String jsonBoolean = gson.toJson(false);  // false
            String jsonString = gson.toJson("String");  //"String"
            ```
        3. POJO类的生成与解析
            ```java
            public class User {
                // 省略其它
                public String name;
                public int age;
                public String emailAddress;
            }
            // 生成
            User user = new User("怪盗kidou",24);
            String jsonObject = gson.toJson(user); // {"name":"��盗kidou","age":24}
            // 解析
            String jsonString = "{\"name\":\"怪盗kidou\",\"age\":24}";
            User user = gson.fromJson(jsonString, User.class);
            ```
    2. 属性重命名 @SerializedName 注解的使用
        1. 从上面POJO的生成与解析可以看出json的字段和值是的名称和类型是一一对应的，但也有一定容错机制(如第一个例子第3行将字符串的99.99转成double型，你可别告诉我都是字符串啊)，但有时候也会出现一些不和谐的情况，如：
            1. 期望的json格式: ``{"name": "怪盗kidou", "age": 24, "emailAddress": "ikidou@example.com"}``
            2. 实际: ``{"name": "怪盗kidou", "age": 24, "email_address": "ikidou@example.com"}``
        2. 我们知道Gson在序列化和反序列化时需要使用反射，说到反射就不得不想到注解,一般各类库都将注解放到annotations包下，打开源码在com.google.gson包下果然有一个annotations，里面有一个SerializedName的注解类，这应该就是我们要找的。那么对于json中email_address这个属性对应POJO的属性则变成：
            ```java
            @SerializedName("email_address")
            public String emailAddress;
            ```
        3. SerializedName注解提供了两个属性，上面用到了其中一个，别外还有一个属性alternate，接收一个String数组。可以为POJO字段提供备选属性名。注：当多种情况同时出时，以最后一个出现的值为准。
            ```java
            @SerializedName(value = "emailAddress", alternate = {"email", "email_address"})
            public String emailAddress;
            ```
    3. Gson中使用泛型
        1. 数组
            ```java
            String jsonArray = "[\"Android\",\"Java\",\"PHP\"]";
            String[] strings = gson.fromJson(jsonArray, String[].class);
            ```
        2. 泛型: 为了避免泛型檫除
            ```java
            List<String> stringList = gson.fromJson(jsonArray, new TypeToken<List<String>>() {}.getType());
            // TypeToken的构造方法是protected修饰的,所以上面才会写成 new TypeToken<List<String>>() {}.getType() 而不是 new TypeToken<List<String>>().getType()
            ```
        3. 泛型解析对接口POJO的设计影响
            1. 原来
                ```java
                // {"code":"0","message":"success","data":{}}
                // {"code":"0","message":"success","data":[{},{},...]}
                public class UserResult {
                    public int code;
                    public String message;
                    public User data;
                }
                public class UserListResult {
                    public int code;
                    public String message;
                    public List<User> data;
                }
                // =========
                String json = "{..........}";
                Gson gson = new Gson();
                UserResult userResult = gson.fromJson(json, UserResult.class);
                User user = userResult.data;
                UserListResult userListResult = gson.fromJson(json, UserListResult.class);
                List<User> users = userListResult.data;
                ```
            2. 后来
                ```java
                public class UserResponse<T> {
                    public int code;
                    public String message;
                    public T data;
                }
                // ========
                Result<User> userResult = gson.fromJson(json, new TypeToken<Result<User>>(){}.getType());
                User user = userResult.data;
                Result<List<User>> userListResult = gson.fromJson(json, new TypeToken<Result<List<User>>>(){}.getType());
                List<User> users = userListResult.data;
                ```
3. 基础2
    1. Gson的流式反序列化
        1. 自动方式: Gson提供了fromJson()和toJson() 两个直接用于解析和生成的方法，前者实现反序列化，后者实现了序列化。同时每个方法都提供了重载方法，我常用的总共有5个。
            ```java
            Gson.toJson(Object);
            Gson.fromJson(Reader, Class);
            Gson.fromJson(String, Class);
            Gson.fromJson(Reader, Type);
            Gson.fromJson(String, Type);
            ```
        2. 手动方式: 手动的方式就是使用stream包下的JsonReader类来手动实现反序列化，和Android中使用pull解析XML是比较类似的。其实自动方式最终都是通过JsonReader来实现的，如果第一个参数是String类型，那么Gson会创建一个StringReader转换成流操作。
            ```java
            String json = "{\"name\":\"怪盗kidou\",\"age\":\"24\"}";
            User user = new User();
            JsonReader reader = new JsonReader(new StringReader(json));
            reader.beginObject();  // throws IOException
            while (reader.hasNext()) {
                String s = reader.nextName();
                switch (s) {
                    case "name":
                        user.name = reader.nextString();
                        break;
                    case "age":
                        user.age = reader.nextInt();  // 自动转换
                        break;
                    case "email":
                        user.email = reader.nextString();
                        break;
                }
            }
            reader.endObject();  // throws IOException
            System.out.println(user.name);  // 怪盗kidou
            System.out.println(user.age);  // 24
            System.out.println(user.email);  // ikidou@example.com
            ```
    2. Gson的流式序列化
        1. 自动方式
            ```java
            String Gson.toJson(Object src);
            String Gson.toJson(Object src, Type typeOfSrc);
            String Gson.toJson(JsonElement jsonElement);
            void Gson.toJson(Object src, Appendable writer);
            void Gson.toJson(Object src, Type typeOfSrc, Appendable writer);
            void Gson.toJson(Object src, Type typeOfSrc, JsonWriter writer);
            void Gson.toJson(JsonElement jsonElement, JsonWriter writer);
            void Gson.toJson(JsonElement jsonElement, Appendable writer);
            JsonElement Gson.toJsonTree(Object src);
            JsonElement Gson.toJsonTree(Object src);
            // ...
            // PrintStream(System.out) 、StringBuilder、StringBuffer和*Writer都实现了Appendable接口。
            User user = new User("怪盗kidou", 24, "ikidou@example.com");
            gson.toJson(user, System.out); // 写到控制台
            ```
        2. 手动方式
            ```java
            JsonWriter writer = new JsonWriter(new OutputStreamWriter(System.out));
            writer.beginObject() // throws IOException
                    .name("name").value("怪盗kidou")
                    .name("age").value(24)
                    .name("email").nullValue() //演示null
                    .endObject(); // throws IOException
            writer.flush(); // throws IOException
            // {"name":"怪盗kidou","age":24,"email":null}
            // 除了beginObject、endObject还有beginArray和endArray，两者可以相互嵌套，注意配对即可。beginArray后不可以调用name方法，同样beginObject后在调用value之前必须要调用name方法。
            ```
    3. 使用GsonBuilder导出null值、格式化输出、日期时间及其它小功能
        1. 一般情况下Gson类提供的 API 已经能满足大部分的使用场景，但我们需要更多更特殊、更强大的功能时，这时候就引入一个新的类 GsonBuilder。GsonBuilder从名上也能知道是用于构建Gson实例的一个类，要想改变Gson默认的设置必须使用该类配置Gson。
            ```java
            Gson gson = new GsonBuilder()
                    // 各种配置
                    .create();  // 生成配置好的Gson
            ```
        2. Gson在默认情况下是不动导出值null的键的，如下，可以看出，email字段是没有在json中出现的。
            ```java
            public class User {
                // 省略其它
                public String name;
                public int age;
                public String email;
            }
            User user = new User("怪盗kidou", 24);
            System.out.println(gson.toJson(user));  // {"name":"怪盗kidou","age":24}
            ```
        3. 当我们在调试是、需要导出完整的json串时或API接中要求没有值必须用Null时，就会比较有用。、
            ```java
            Gson gson = new GsonBuilder()
                    .serializeNulls()
                    .create();
            User user = new User("怪盗kidou", 24);
            System.out.println(gson.toJson(user)); //{"name":"怪盗kidou","age":24,"email":null}
            ```
        4. 格式化输出、日期时间及其它：
            ```java
            Gson gson = new GsonBuilder()
                // 序列化null
                .serializeNulls()
                // 设置日期时间格式，另有2个重载方法
                // 在序列化和反序化时均生效
                .setDateFormat("yyyy-MM-dd")
                // 禁此序列化内部类；注意：内部类(Inner Class)和嵌套类(Nested Class)(就是带有static的)的区别
                .disableInnerClassSerialization()
                // 生成不可执行的Json（多了 )]}' 这4个字符）
                .generateNonExecutableJson()
                // 禁止转义html标签
                .disableHtmlEscaping()
                // 格式化输出
                .setPrettyPrinting()
                .create();
            ```
4. 基础3
    1. 字段过滤的几种方法
        1. 基本: 字段过滤Gson中比较常用的技巧，特别是在Android中，在处理业务逻辑时可能需要在设置的POJO中加入一些字段，但显然在序列化的过程中是不需要的，并且如果序列化还可能带来一个问题就是**循环引用**，那么在用Gson序列化之前为不防止这样的事件情发生，你不得不作另外的处理。以一个商品分类Category 为例。
            ```java
            // {"id":1,"name":"电脑","children":[{"id":100,"name":"笔记本"},{"id":101,"name":"台式机"}]}
            // 一个大分类，可以有很多小分类，那么显然我们在设计Category类时Category本身既可以是大分类，也可以是小分类。
            public class Category {
                public int id;
                public String name;
                public List<Category> children;
            }
            // 但是为了处理业务，我们还需要在子分类中保存父分类，最终会变成下面的情况
            public class Category {
                public int id;
                public String name;
                public List<Category> children;
                // 因业务需要增加，但并不需要序列化
                public Category parent; 
            }
            // 上面的parent字段是因业务需要增加的，那么在序列化是并不需要，所以在序列化时就必须将其排除，那么在Gson中如何排除符合条件的字段呢?下面提供4种方法，大家可根据需要自行选择合适的方式。
            ```
        2. 基于@Expose注解: @Expose提供了两个属性: ``@Retention(RetentionPolicy.RUNTIME) @Target({ElementType.FIELD, ElementType.TYPE}) public @interface Expose { public boolean serialize() default true; public boolean deserialize() default true; }``，且都有默认值，开发者可以根据需要设置不同的值。注意该注解必须和GsonBuilder配合使用。
            1. 使用方法：简单说来就是需要导出的字段上加上@Expose注解，不导出的字段不加。注意是不导出的不加。
                ```java
                @Expose //
                @Expose(deserialize = true, serialize = true)  // 序列化和反序列化都都生效，等价于上一条
                @Expose(deserialize = true, serialize = false)  // 反序列化时生效
                @Expose(deserialize = false, serialize = true)  // 序列化时生效
                @Expose(deserialize = false, serialize = false)  // 和不写注解一样
                ```
            2. 拿上面的例子来说就是
                ```java
                public class Category {
                    @Expose public int id;
                    @Expose public String name;
                    @Expose public List<Category> children;
                    public Category parent;
                }
                Gson gson = new GsonBuilder().excludeFieldsWithoutExposeAnnotation().create();
                ```
        3. 基于版本: Gson在对基于版本的字段导出提供了两个注解 @Since 和 @Until,和GsonBuilder.setVersion(Double)配合使用。@Since 和 @Until都接收一个Double值。
            1. 注解
                ```java
                @Retention(RetentionPolicy.RUNTIME)
                @Target({ElementType.FIELD, ElementType.TYPE})
                public @interface Since { double value(); }
                // ----------
                @Retention(RetentionPolicy.RUNTIME)
                @Target({ElementType.FIELD, ElementType.TYPE})
                public @interface Util { double value(); }
                ```
            2. 使用方法：当前版本(GsonBuilder中设置的版本) 大于等于Since的值时该字段导出，小于Until的值时该该字段导出。
                ```java
                class SinceUntilSample {
                    @Since(4)
                    public String since;
                    @Until(5)
                    public String until;
                }
                public void sineUtilTest(double version){
                    SinceUntilSample sinceUntilSample = new SinceUntilSample();
                    sinceUntilSample.since = "since";
                    sinceUntilSample.until = "until";
                    Gson gson = new GsonBuilder().setVersion(version).create();
                    System.out.println(gson.toJson(sinceUntilSample));
                }
                // 当version <4时，结果：{"until":"until"}
                // 当version >=4 && version <5时，结果：{"since":"since","until":"until"}
                // 当version >=5时，结果：{"since":"since"}
                ```
        4. 基于访问修饰符
            ```java
            class ModifierSample {
                final String finalField = "final";
                static String staticField = "static";
                public String publicField = "public";
                protected String protectedField = "protected";
                String defaultField = "default";
                private String privateField = "private";
            }
            ModifierSample modifierSample = new ModifierSample();
            Gson gson = new GsonBuilder()
                    .excludeFieldsWithModifiers(Modifier.FINAL, Modifier.STATIC, Modifier.PRIVATE)
                    .create();
            System.out.println(gson.toJson(modifierSample));
            // 结果：{"publicField":"public","protectedField":"protected","defaultField":"default"}
            ```
        5. 基于策略（自定义规则）
            1. 优点是功能强大、灵活，缺点是相比其它3种方法稍麻烦一点，但也仅仅只是想对其它3种稍麻烦一点而已。基于策略是利用Gson提供的ExclusionStrategy接口，同样需要使用GsonBuilder，相关API有2个，分别是 addSerializationExclusionStrategy 和 addDeserializationExclusionStrategy 分别针对序列化和反序化时。这里以序列化为例。
            2. 例子
                ```java
                Gson gson = new GsonBuilder()
                    .addSerializationExclusionStrategy(new ExclusionStrategy() {
                        @Override
                        public boolean shouldSkipField(FieldAttributes f) {
                            // 这里作判断，决定要不要排除该字段, return true为排除
                            if ("finalField".equals(f.getName())) return true; //按字段名排除
                            Expose expose = f.getAnnotation(Expose.class);
                            if (expose != null && expose.deserialize() == false) return true; //按注解排除
                            return false;
                        }
                        @Override
                        public boolean shouldSkipClass(Class<?> clazz) {
                            // 直接排除某个类 ，return true为排除
                            return (clazz == int.class || clazz == Integer.class);
                        }
                    })
                    .create();
                ```
        6. 只要不是通过设置 excludeFieldsWithModifiers 的方式，staticField都是默认被排除的，可以看源码 Excluder 的 55行、withModifiers 方法 ，withExclusionStrategy 方法
    2. POJO与JSON的字段映射规则
        1. 还是之前User的例子，已经去除所有注解：
            ```java
            User user = new User("怪盗kidou", 24);
            user.emailAddress = "ikidou@example.com";
            ```
        2. GsonBuilder提供了 FieldNamingStrategy 接口和 setFieldNamingPolicy 和 setFieldNamingStrategy 两个方法。
        3. 默认实现: GsonBuilder.setFieldNamingPolicy 方法与 Gson 提供的另一个枚举类 FieldNamingPolicy 配合使用，该枚举类提供了5种实现方式分别为：
            | FieldNamingPolicy            | 结果（仅输出emailAddress字段）         |
            | :--------------------------- | :------------------------------------- |
            | IDENTITY                     | {"emailAddress":"ikidou@example.com"}  |
            | LOWER_CASE_WITH_DASHES       | {"email-address":"ikidou@example.com"} |
            | LOWER_CASE_WITH_UNDERSCORES  | {"email_address":"ikidou@example.com"} |
            | UPPER_CAMEL_CASE             | {"EmailAddress":"ikidou@example.com"}  |
            | UPPER_CAMEL_CASE_WITH_SPACES | {"Email Address":"ikidou@example.com"} |
        4. 自定义实现: GsonBuilder.setFieldNamingStrategy 方法需要与Gson提供的FieldNamingStrategy接口配合使用，用于实现将POJO的字段与JSON的字段相对应。上面的FieldNamingPolicy实际上也实现了FieldNamingStrategy接口，也就是说FieldNamingPolicy也可以使用setFieldNamingStrategy方法。
        5. 用法：
            ```java
            Gson gson = new GsonBuilder()
                .setFieldNamingStrategy(new FieldNamingStrategy() {
                    @Override
                    public String translateName(Field f) {
                        //实现自己的规则
                        return null;
                    }
                })
                .create();
            ```
        6. 注意： @SerializedName注解拥有最高优先级，在加有@SerializedName注解的字段上FieldNamingStrategy不生效！
5. 基础4
    1. TypeAdapter
        1. TypeAdapter是Gson自2.0（源码注释上说的是2.1）开始版本提供的一个抽象类，用于接管某种类型的序列化和反序列化过程，包含两个注要方法 write(JsonWriter,T) 和 read(JsonReader) 其它的方法都是final方法并最终调用这两个抽象方法。
        2. 注意：TypeAdapter 以及 JsonSerializer 和 JsonDeserializer 都需要与 GsonBuilder.registerTypeAdapter 示或GsonBuilder.registerTypeHierarchyAdapter配合使用，下面将不再重复说明。
        3. 示例
            ```java
            User user = new User("怪盗kidou", 24);
            user.emailAddress = "ikidou@example.com";
            Gson gson = new GsonBuilder()
                    // 为User注册TypeAdapter
                    .registerTypeAdapter(User.class, new UserTypeAdapter())
                    .create();
            System.out.println(gson.toJson(user));
            ```
            ```java
            public class UserTypeAdapter extends TypeAdapter<User> {
                @Override public void write(JsonWriter out, User value) throws IOException {
                    out.beginObject();
                    out.name("name").value(value.name);
                    out.name("age").value(value.age);
                    out.name("email").value(value.email);
                    out.endObject();
                }
                @Override public User read(JsonReader in) throws IOException {
                    User user = new User();
                    in.beginObject();
                    while (in.hasNext()) {
                        switch (in.nextName()) {
                            case "name":
                                user.name = in.nextString();
                                break;
                            case "age":
                                user.age = in.nextInt();
                                break;
                            case "email":
                            case "email_address":
                            case "emailAddress":
                                user.email = in.nextString();
                                break;
                        }
                    }
                    in.endObject();
                    return user;
                }
            }
            ```
        4. 当我们为User.class 注册了 TypeAdapter之后，只要是操作User.class 那些之前介绍的@SerializedName 、FieldNamingStrategy、Since、Until、Expos通通都黯然失色，失去了效果，只会调用我们实现的UserTypeAdapter.write(JsonWriter, User) 方法，我想怎么写就怎么写。
        5. 避免整数为空串的情况
            ```java
            Gson gson = new GsonBuilder()
                    .registerTypeAdapter(Integer.class, new TypeAdapter<Integer> {
                        @Override public void write(JsonWriter out, Integer value) throws IOException {
                            out.value(String.valueOf(value)); 
                        }
                        @Override public Integer read(JsonReader in) throws IOException {
                            try {
                                return Integer.parseInt(in.nextString());
                            } catch (NumberFormatException e) {
                                return -1;
                            }
                        }
                    })
                    .create()
            ```
        6. 这一接管就要管两样好麻烦呀，我明明只想管序列化（或反列化）的过程的，另一个过程我并不关心，难道没有其它更简单的方法么? 当然有！就是接下来要介绍的 JsonSerializer与JsonDeserializer。
    2. JsonSerializer与JsonDeserializer
        1. JsonSerializer 和JsonDeserializer不用像TypeAdapter一样，必须要实现序列化和反序列化的过程，你可以据需要选择，如只接管序列化的过程就用 JsonSerializer ，只接管反序列化的过程就用 JsonDeserializer ，如上面的需求可以用下面的代码。
        2. 防止数字转化失败的示例
            ```java
            Gson gson = new GsonBuilder()
                    .registerTypeAdapter(Integer.class, new JsonSerializer<Integer> {
                        @Override public Integer deserialize(JsonElement json, Type typeOfT, JsonDeserializationContext context) throws JsonParseException {
                            try {
                                return json.getAsInt();
                            } catch (NumberFormatException e) {
                                return -1;
                            }
                        }
                    })
                    .create()
            ```
        3. 下面是所有数字都转成序列化为字符串的例子
            ```java
            JsonSerializer<Number> numberJsonSerializer = new JsonSerializer<Number>() {
                @Override
                public JsonElement serialize(Number src, Type typeOfSrc, JsonSerializationContext context) {
                    return new JsonPrimitive(String.valueOf(src));
                }
            };
            Gson gson = new GsonBuilder()
                    .registerTypeAdapter(Integer.class, numberJsonSerializer)
                    .registerTypeAdapter(Long.class, numberJsonSerializer)
                    .registerTypeAdapter(Float.class, numberJsonSerializer)
                    .registerTypeAdapter(Double.class, numberJsonSerializer)
                    .create();
            System.out.println(gson.toJson(100.0f));//结果："100.0"
            ```
        4. 注：registerTypeAdapter必须使用包装类型，所以int.class,long.class,float.class和double.class是行不通的。同时不能使用父类来替上面的子类型，这也是为什么要分别注册而不直接使用Number.class的原因。
        5. 上面特别说明了registerTypeAdapter不行，那就是有其它方法可行咯?当然！换成**registerTypeHierarchyAdapter **就可以使用Number.class而不用一个一个的当独注册啦！registerTypeAdapter与registerTypeHierarchyAdapter的区别：registerTypeAdapter支持泛型，而registerTypeHierarchyAdapter支持继承。
        6. 注：如果一个被序列化的对象本身就带有泛型，且注册了相应的TypeAdapter，那么必须调用Gson.toJson(Object,Type)，明确告诉Gson对象的类型。
    3. TypeAdapterFactory
        1. TypeAdapterFactory,见名知意，用于创建TypeAdapter的工厂类，通过对比Type，确定有没有对应的TypeAdapter，没有就返回null，与GsonBuilder.registerTypeAdapterFactory配合使用。
            ```java
            Gson gson = new GsonBuilder()
                .registerTypeAdapterFactory(new TypeAdapterFactory() {
                    @Override
                    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
                        return null;
                    }
                })
                .create();
            ```
    4. @JsonAdapter注解
        1. JsonAdapter相较之前介绍的SerializedName 、FieldNamingStrategy、Since、Until、Expos这几个注解都是比较特殊的，其它的几个都是用在POJO的字段上，而这一个是用在POJO类上的，接收一个参数，且必须是TypeAdpater，JsonSerializer或JsonDeserializer这三个其中之一。
        2. 上面说JsonSerializer和JsonDeserializer都要配合GsonBuilder.registerTypeAdapter使用，但每次使用都要注册也太麻烦了，JsonAdapter就是为了解决这个痛点的。使用方法（以User为例）：
            ```java
            @JsonAdapter(UserTypeAdapter.class) //加在类上
            public class User {
                public User() {}
                public User(String name, int age) {
                    this.name = name;
                    this.age = age;
                }
                public User(String name, int age, String email) {
                    this.name = name;
                    this.age = age;
                    this.email = email;
                }
                public String name;
                public int age;
                @SerializedName(value = "emailAddress")
                public String email;
            }
            ```
        3. 注： @JsonAdapter 仅支持 TypeAdapter或TypeAdapterFactory( 2.7开始已经支持 JsonSerializer/JsonDeserializer)
        4. 注：JsonAdapter的优先级比GsonBuilder.registerTypeAdapter的优先级更高。
    5. TypeAdapter与 JsonSerializer、JsonDeserializer对比
        | .          | TypeAdapter        | JsonSerializer、JsonDeserializer |
        | :--------- | :----------------- | :------------------------------- |
        | 引入版本   | 2.0                | 1.x                              |
        | Stream API | 支持               | 不支持*，需要提前生成JsonElement |
        | 内存占用   | 小                 | 比TypeAdapter大                  |
        | 效率       | 高                 | 比TypeAdapter低                  |
        | 作用范围   | 序列化 和 反序列化 | 序列化 或 反序列化               |
    6. TypeAdapter实例
        1. 注：这里的TypeAdapter泛指TypeAdapter、JsonSerializer和JsonDeserializer。上面讲了一个自动将字符串形式的数值转换成int型时可能出现空字符串的问题，下面介绍一个其它读者的需求：服务器返回的数据中data字段类型不固定，比如请求成功data是一个List,不成功的时候是String类型，这样前端在使用泛型解析的时候，怎么去处理呢？
        2. 其实这个问题的原因主要由服务器端造成的，接口设计时没有没有保证数据的一致性，正确的数据返回姿势：同一个接口任何情况下不得改变返回类型，要么就不要返，要么就返空值，如null、[],{}。
        3. 方案一：
            ```java
            Gson gson = new GsonBuilder().registerTypeHierarchyAdapter(List.class, new JsonDeserializer<List<?>>() {
                private Gson newGson = new Gson();
                @Override
                public List<?> deserialize(JsonElement json, Type typeOfT, JsonDeserializationContext context) throws JsonParseException {
                    if (json.isJsonArray()){
                        // 这里要自己负责解析了
                        return newGson.fromJson(json,typeOfT);
                    } else {
                        // 和接口类型不符，返回空List
                        return Collections.EMPTY_LIST;
                    }
                }
            }).create();
            ```
        4. 方案二：
            ```java
            Gson gson = new GsonBuilder().registerTypeHierarchyAdapter(List.class, new JsonDeserializer<List<?>>() {
                @Override
                public List<?> deserialize(JsonElement json, Type typeOfT, JsonDeserializationContext context) throws JsonParseException {
                    if (json.isJsonArray()) {
                        JsonArray array = json.getAsJsonArray();
                        Type itemType = ((ParameterizedType) typeOfT).getActualTypeArguments()[0];
                        List list = new ArrayList<>();
                        for (int i = 0; i < array.size(); i++) {
                            JsonElement element = array.get(i);
                            Object item = context.deserialize(element, itemType);
                            list.add(item);
                        }
                        return list;
                    } else {
                        //和接口类型不符，返回空List
                        return Collections.EMPTY_LIST;
                    }
                }
            }).create();
            ```
        5. 要注意的点：
            1. 必须使用registerTypeHierarchyAdapter方法，不然对List的子类无效，但如果POJO中都是使用List，那么可以使用registerTypeAdapter。
            2. 对于是数组的情况，需要创建一个新的Gson，不可以直接使用context,不然gson又会调我们自定义的JsonDeserializer造成递归调用，方案二没有重新创建Gson，那么就需要提取出List<E>中E的类型，然后分别反序列化适合为E手动注册了TypeAdaper的情况。
            3. 从效率上推荐方案二，免去重新实例化Gson和注册其它TypeAdapter的过程。
6. 基础5
    1. TypeBuilder

## Retrofit2

0. links
    * [Retrofit关键概念解析](https://www.jianshu.com/p/f085be1c302c)
    * [Retrofit解析3之反射](https://www.jianshu.com/p/2216475cddfe)
    * [你真的会用Retrofit2吗?Retrofit2完全教程](https://www.jianshu.com/p/308f3c54abdd)
    * [Android Retrofit 2.0 的详细 使用攻略（含实例讲解）](https://www.jianshu.com/p/a3e162261ab6)
    * [Retrofit 从入门到了解【总结】](https://www.cnblogs.com/baiqiantao/p/7494850.html)
    * [Retrofit github](https://github.com/square/retrofit)
    * [OKhttp和Retrofit源码分析](https://blog.csdn.net/new_abc/column/info/13425)
    * [RxJava+Retrofit+OkHttp](https://blog.csdn.net/u014610664/column/info/13297)
1. 知识1
2. 知识2
3. 知识3
4. 知识4

## OKHttp

0. links
    * [OkHttp官方教程解析-彻底入门OkHttp使用](https://blog.csdn.net/u013651026/article/details/79738059) finished
    * [理解RESTful架构](http://www.ruanyifeng.com/blog/2011/09/restful.html)
    * [OkHttp github](https://github.com/square/okhttp)
    * [OkHttpFinal github](https://github.com/pengjianbo/OkHttpFinal)
    * [Kalle github](https://github.com/yanzhenjie/Kalle)
    * [xUtil github]()
    * [restful-api-design-references github](https://github.com/aisuhua/restful-api-design-references)
    * [Android网络编程（六）OkHttp3用法全解析](https://blog.csdn.net/itachi85/article/details/51190687)
    * [OKhttp和Retrofit源码分析](https://blog.csdn.net/new_abc/column/info/13425)
1. OkHttp知识1
    1. 导入
        ```groovy
        implementation("com.squareup.okhttp3:okhttp:4.0.1")
        testImplementation("com.squareup.okhttp3:mockwebserver:4.0.1")  // 如果需要
        ```
        ```xml
        <uses-permission android:name="android.permission.INTERNET"/>
        ```
    2. 基本的Get
        ```java
        OkHttpClient client = new OkHttpClient();
        String get(String url) throws IOException {
            Request request = new Request.Builder().url(url).build();
            Response response = client.newCall(request).execute();
            return response.isSuccessful() ? response.body().string() : "empty string";
            // 获取到流的形式: response.body().byteStream() / response.body().charStream()
        }
        ```
    3. 基本的Post
        ```java
        public static final MediaType JSON = MediaType.parse("application/json;charset=utf-8");
        OkHttpClient client = new OkHttpClient();
        String post(String url, String json) throws IOException {
            Request request = new Request.Builder().url(url).post(RequestBody.create(JSON, json)).build();
            Response response = client.newCall(request).execute();
            return response.isSuccessful() ? response.body().string() : "empty string";
        }
        ```
    4. Post(键值对)
        ```java
        String post(String url, Map<String, String> map) throws IOException {
            RequestBody toBody = new FormEncoding.Builder()
                .add("platform", "android")
                .add("name", "bug")
                .add("subject", "XXXXXXXXXXXXXXX")
                .build();
            Request request = new Request.Builder().url(url).post(toBody).build();
            Response response = client.newCall(request).execute();
            return response.body().string();
        }
        ```
2. OkHttp知识2
    1. 下面的共同条件
        ```java
        OkHttpClient client = new OKHttpClient();
        public static final MediaType MEDIA_TYPE_MARKDOWN = MediaType.parse("text/x-markdown; charset=utf-8");
        ```
    2. Synchronous Get(同步Get): 下载一个文件，打印他的响应头，以string形式打印响应体。响应体的 string() 方法对于小文档来说十分方便、高效。 但是如果响应体太大（超过1MB），应避免适应 string()方法 ，因为他会将把整个文档加载到内存中。对于超过1MB的响应body，应使用流的方式来处理body。
        ```java
        Request request = new Request.Builder().tag(MainActivity.this)
            .url("http://publicobject.com/helloworld.txt").build();
        Response response = client.newCall(request).execute();
        if (!response.isSuccessful()) throw new IOException("Unexpected code " + response);
        Headers responseHeaders = response.headers();
        for (int i = 0; i < responseHeaders.size(); ++i) {
            Log.d("MainActivity-- ", responseHeaders.name(i) + ": " + responseHeaders.value(i));
        }
        Log.d(response.body().string());
        ```
    3. Asynchronous Get(异步Get): 在一个工作线程中下载文件，当响应可读时回调Callback接口。读取响应时会阻塞当前线程。OkHttp现阶段不提供异步api来接收响应体。
        ```java
        Request request = new Request.Builder().tag(MainActivity.this)
            .url("http://publicobject.com/helloworld.txt").build();
        client.newCall(request).enqueue(new Callback() {
            @Override public void onFailure(Call call, IOException e) {
                Log.e(TAG, "onFailure", e);
            }
            @Override public void onResponse(Call call, Response response) throws IOException {
                if (!response.isSuccessful()) throw new IOException("Unexpected code " + response);
                Headers responseHeaders = response.headers();
                for (int i = 0; i < responseHeaders.size(); ++i) {
                    Log.d("MainActivity-- ", responseHeaders.name(i) + ": " + responseHeaders.value(i));
                }
                Log.d(response.body().string());
            }
        });
        ```
    4. Accessing Headers(提取响应头)
        ```java
        Request request = new Request.Builder()
            .url("https://api.github.com/repos/square/okhttp/issues")
            .header("User-Agent", "OkHttp Headers.java")
            .addHeader("Accept", "application/json; q=0.5")
            .addHeader("Accept", "application/vnd.github.v3+json")
            .build();
        // ...
        Log.d("MainActivity-- ", "Server: " + response.header("Server"));
        ```
3. OkHttp知识3
    1. Posting a String(Post方式提交String): 使用HTTP POST提交请求到服务。这个例子提交了一个markdown文档到web服务，以HTML方式渲染markdown。 因为整个请求体都在内存中，因此避免使用此api提交大文档（大于1MB）。
        ```java
        String postBody = "Releases\n"
            + "--------\n"
            + "\n"
            + " * _1.0_ May 6, 2013\n"
            + " * _1.1_ June 15, 2013\n"
            + " * _1.2_ August 11, 2013\n";
        Request request = new Request.Builder()
            .url("https://api.github.com/markdown/raw")
            .post(RequestBody.create(MEDIA_TYPE_MARKDOWN, postBody))
            .build();
        ```
    2. Post Streaming(Post方式提交流): 以流的方式POST提交请求体。请求体的内容由流写入产生。这个例子是流直接写入Okio的BufferedSink。你的程序可能会使用OutputStream，你可以使用BufferedSink.outputStream()来获取。
        ```java
        RequestBody requestBody = new RequestBody() {
            @Override public MediaType contentType() { return MEDIA_TYPE_MARKDOWN; }
            @Override public void writeTo(BufferedSink sink) throws IOException {
                sink.writeUtf8("Numbers\n");
                sink.writeUtf8("-------\n");
                for (int i = 2; i <= 997; i++) {
                    sink.writeUtf8(String.format(" * %s = %s\n", i, factor(i)));
                }
            }
            private String factor(int n) {
                for (int i = 2; i < n; i++) {
                    int x = n / i;
                    if (x * i == n) return factor(x) + " × " + i;
                }
                return Integer.toString(n);
            }
        };
        Request request = new Request.Builder().url("https://api.github.com/markdown/raw").post(requestBody).build();
        ```
    3. Posting a File(Post方式提交文件)
        ```java
        Request request = new Request.Builder().url("https://api.github.com/markdown/raw").post(RequestBody.create(MEDIA_TYPE_MARKDOWN, new File("README.md"))).build();
        ```
    4. Posting form parameters(Post方式提交表单)
        ```java
        Request request = new Request.Builder().url("https://en.wikipedia.org/w/index.php").post(new FormBody.Builder().add("search", "Jurassic Park").build()).build();
        ```
4. OkHttp知识4
    1. Posting a multipart request(Post方式提交分块请求): MultipartBuilder可以构建复杂的请求体，与HTML文件上传形式兼容。多块请求体中每块请求都是一个请求体，可以定义自己的请求头。这些请求头可以用来描述这块请求，例如他的Content-Disposition。如果Content-Length和Content-Type可用的话，他们会被自动添加到请求头中。
        ```java
        private static final String IMGUR_CLIENT_ID = "...";
        private static final MediaType MEDIA_TYPE_PNG = MediaType.parse("image/png");
        // Use the imgur image upload API as documented at
        https://api.imgur.com/endpoints/image
        RequestBody requestBody = new MultipartBody().Builder().setType(MultipartBody.FORM)
            .addFormDataPart("title", "Square Logo")
            .addFormDataPart("image", "logo-square.png",
                RequestBody.create(MEDIA_TYPE_PNG, new File("website/static/logo-square.png")))
            .build();
        Request request = new Request.Builder()
            .header("Authorization", "Client-ID " + IMGUR_CLIENT_ID)
            .url("https://api.imgur.com/3/image")
            .post(requestBody).build();
        ```
    2. Response Caching(响应缓存)
        ```java
        private final OkHttpClient client;
        public CacheResponse(File cacheDirectory) throws Exception {
            int cacheSize = 10 * 1024 * 1024;  // 10 MiB
            Cache cache = new Cache(cacheDirectory, cacheSize);
            client = new OkHttpClient.Builder().cache(cache).build();
        }
        // response.cacheResponse() / response.networkResponse()
        // CacheControl.FORCE_NETWORK / CacheControl.FORCE_CACHE
        ```
    3. Canceling a Call(取消一个Call): 使用Call.cancel()可以立即停止掉一个正在执行的call。如果一个线程正在写请求或者读响应，将会引发IOException。 当call没有必要的时候，使用这个api可以节约网络资源。例如当用户离开一个应用时。不管同步还是异步的call都可以取消。你可以通过tags来同时取消多个请求。当你构建一请求时，使用RequestBuilder.tag(tag)来分配一个标签。之后你就可以用OkHttpClient.cancel(tag)来取消所有带有这个tag的call。
        ```java
        private final ScheduledExecutorService executor = Executors.newScheduledThreadPool(1);
        Request request = new Request.Builder().url("http://httpbin.org/delay/2").build();  // This URL is served with a 2 second delay.
        final long startNanos = System.nanoTime();
        final Call call = client.newCall(request);
        executor.schedule(() -> {  // Schedule a job to cancel the call in 1 second.
            System.out.printf("%.2f Canceling call.%n", (System.nanoTime() - startNanos) / 1e9f);
            call.cancel();
            System.out.printf("%.2f Canceled call.%n", (System.nanoTime() - startNanos) / 1e9f);
        }, 1, TimeUnit.SECONDS);
        try {
            System.out.printf("%.2f Executing call.%n", (System.nanoTime() - startNanos) / 1e9f);
            Response response = call.execute();
            System.out.printf("%.2f Call was expected to fail, but completed: %s%n", (System.nanoTime() - startNanos) / 1e9f, response);
        } catch (IOException e) {
            System.out.printf("%.2f Call failed as expected: %s%n", (System.nanoTime() - startNanos) / 1e9f, e);
        }
        ```
5. OkHttp知识5
    1. Timeouts(超时): OkHttp支持连接，读取和写入超时。``client = new OkHttpClient.Builder().connectTimeout(10, TimeUnit.SECONDS).writeTimeout(10, TimeUnit.SECONDS).readTimeout(30, TimeUnit.SECONDS).build();``
    2. Per-call Configuration(每个Call的配置): 使用OkHttpClient，所有的HTTP Client配置包括代理设置、超时设置、缓存设置。当你需要为单个call改变配置的时候，clone一个 OkHttpClient。 这个api将会返回一个浅拷贝（shallow copy），你可以用来单独自定义。下面的例子中，我们让一个请求是500ms的超时、另一个是3000ms的超时。
        ```java
        private final OkHttpClient client = new OkHttpClient();
        OkHttpClient copy1 = client.newBuilder().readTimeout(500, TimeUnit.MILLISECONDS).build();
        OkHttpClient copy2 = client.newBuilder().readTimeout(3000, TimeUnit.MILLISECONDS).build();
        ```
    3. Handling authentication(处理验证): OkHttp会自动重试未验证的请求。当响应是401 Not Authorized时，Authenticator会被要求提供证书。Authenticator的实现中需要建立一个新的包含证书的请求。如果没有证书可用，返回null来跳过尝试。
        1. 基本例子
            ```java
            client = new OkHttpClient.Builder().authenticator(new Authenticator() {
                @Override public Request authenticate(Route route, Response response) throws IOException {
                    System.out.println("Authenticating for response: " + response);
                    System.out.println("Challenges: " + response.challenges());
                    String credential = Credentials.basic("jesse", "password1");
                    return response.request().newBuilder().header("Authorization", credential).build();
                }
            }).build();
            ```
        2. 为了避免在身份验证不起作用时进行多次重试，可以返回NULL以放弃。例如，当这些确切的凭据已经尝试时，您可能希望跳过重试。
            ```java
            if (credential.equals(response.request().header("Authorization"))) {
                return null;  // If we already failed with these credentials, don't retry.
            }
            // You may also skip the retry when you’ve hit an application-defined attempt limit:
            if (responseCount(response) >= 3) {
                return null; // If we've failed 3 times, give up.
            }
            // This above code relies on this responseCount() method:
            private int responseCount(Response response) {
                int result = 1;
                while ((response = response.priorResponse()) != null) result++;
                return result;
            }
            ```
6. OkHttp知识6
    1. OkHttpClient
    2. Request
    3. Response
    4. RequestBody
    5. ResponseBody
    6. MultipartBody
    7. FormBody
    8. Callback

## Volley

1. links
    * [Android Volley完全解析系列](https://blog.csdn.net/guolin_blog/article/details/17482095) finished(除了最后的源码解读那一篇)
    * [volley github](https://github.com/google/volley)
    * [Volley overview](https://developer.android.com/training/volley/index.html)
    * [Volley支持https的3种方法小结](https://blog.csdn.net/lintax/article/details/69761913)
    * [Android高效加载大图、多图解决方案，有效避免程序OOM](https://blog.csdn.net/guolin_blog/article/details/9316683)
2. 基本用法
    1. Android系统中主要提供了两种方式来进行HTTP通信，HttpURLConnection和HttpClient，它们的使用率非常高。
    2. 不过HttpURLConnection和HttpClient的用法还是稍微有些复杂的，如果不进行适当封装的话，很容易就会写出不少重复代码。于是乎，一些Android网络通信框架也就应运而生，说 AsyncHttpClient，它把HTTP所有的通信细节全部封装在了内部，我们只需要简单调用几行代码就可以完成通信操作了；如Universal-Image-Loader，它使得在界面上显示网络图片的操作变得极度简单， 开发者不用关心如何从网络上获取图片，也不用关心开启线程、回收图片资源等细节。
    3. 而Android开发团队也是在2013年Google I/O大会上推出了一个新的网络通信框架——Volley，把AsyncHttpClient和Universal-Image-Loader的优点集于了一身，既可以像AsyncHttpClient一样非 常简单地进行HTTP通信，也可以像Universal-Image-Loader一样轻松加载网络上的图片。除了简单易用之外，Volley在性能方面也进行了大幅度的调整，它的设计目标就是非常适合去进行数据量不大，但通信频繁的网络操作，而对于大数据量的网络操作，比如说下载文件等，Volley的表现就会非常糟糕。
    4. StringRequest的用法
        1. 获得请求队列对象``RequestQueue mQueue = Volley.newRequestQueue(context);``
        2. RequestQueue是一个请求队列对象，它可以缓存所有的HTTP请求，然后按照一定的算法并发地发出这些请求。RequestQueue内部的设计就是非常合适高并发的，因此我们不必为每一次HTTP请求都创建一个RequestQueue对象，这是非常浪费资源的，基本上在每一个需要和网络交互的Activity中创建一个RequestQueue对象就足够了。
        3. 创建StringRequest对象
            ```java
            StringRequest stringRequest = new StringRequest(Request.Method.POST, "http://www.baidu.com",
                response -> Log.d("TAG", response),
                error -> Log.e("TAG", error.getMessage(), error));
            ```
        4. 发出请求``mQueue.add(stringRequest);``
        5. 添加权限``<uses-permission android:name="android.permission.INTERNET" />``
    5. JsonRequest的用法
        1. 类似于StringRequest，JsonRequest也是继承自Request类的，不过由于JsonRequest是一个抽象类，因此我们无法直接创建它的实例，那么只能从它的子类入手了。JsonRequest有两个直接的子类，JsonObjectRequest和JsonArrayRequest
        2. 至于它们的用法也基本上没有什么特殊之处，先new出一个JsonObjectRequest对象，如下所示
        ```java
            JsonObjectRequest jsonObjectRequest = new JsonObjectRequest("http://m.weather.com.cn/data/101010100.html", null,
                response -> Log.d("TAG", response.toString()),
                error -> Log.e("TAG", error.getMessage(), error));
            ```
    6. ImageRequest的用法
        1. 示例
            ```java
            ImageRequest imageRequest = new ImageRequest("http://developer.android.com/images/home/aw_dac.png",
                response -> imageView.setImageBitmap(response), 0, 0, Config.RGB_565,
                error -> Log.e("TAG", error.getMessage(), error));
            ```
        2. 第三第四个参数分别用于指定允许图片最大的宽度和高度，如果指定的网络图片的宽度或高度大于这里的最大值，则会对图片进行压缩，指定成0的话就表示不管图片有多大，都不会进行压缩。第五个参数用于指定图片的颜色属性，Bitmap.Config下的几个常量都可以在这里使用，其中ARGB_8888可以展示最好的颜色属性，每个图片像素占据4个字节的大小，而RGB_565则表示每个图片像素占据2个字节大小。
3. 高级用法1
    1. ImageLoader的用法
        1. ImageLoader也可以用于加载网络上的图片，并且它的内部也是使用ImageRequest来实现的，不过ImageLoader明显要比ImageRequest更加高效，因为它不仅可以帮我们对图片进行缓存，还可以过滤掉重复的链接，避免重复发送请求。
        2. 由于ImageLoader已经不是继承自Request的了，所以它的用法也和我们之前学到的内容有所不同，总结起来大致可以分为以下四步:
            1. 创建一个RequestQueue对象。
            2. 创建一个ImageLoader对象。
            3. 获取一个ImageListener对象。
            4. 调用ImageLoader的get()方法加载网络上的图片。
        3. 示例
            ```java
            ImageLoader imageLoader = new ImageLoader(requestQueue, new ImageCache() {
                @Override public void putBitmap(String url, Bitmap bitmap) {}
                @Override public Bitmap getBitmap(String url) { return null; }
            });
            ImageListener listener = ImageLoader.getImageListener(imageView, R.drawable.proceeding_image, R.drawable.failed_image);
            imageLoader.get("https://img-my.csdn.net/uploads/201404/13/1397393290_5765.jpeg", listener, 200, 200);
            ```
        4. 虽然现在我们已经掌握了ImageLoader的用法，但是刚才介绍的ImageLoader的优点却还没有使用到。为什么呢？因为这里创建的ImageCache对象是一个空的实现，完全没能起到图片缓存的作用。其实写一个ImageCache也非常简单，但是如果想要写一个性能非常好的ImageCache，最好就要借助Android提供的LruCache功能了。
            ```java
            public class BitmapCache implements ImageCache {
                private LruCache<String, Bitmap> mCache;
                public BitmapCache() {
                    int maxSize = 10 * 1024 * 1024;
                    mCache = new LruCache<String, Bitmap>(maxSize) {
                        @Override protected int sizeOf(String key, Bitmap bitmap) {
                            return bitmap.getRowBytes() * bitmap.getHeight();
                        }
                    };
                }
                @Override public Bitmap getBitmap(String url) { return mCache.get(url); }
                @Override public void putBitmap(String url, Bitmap bitmap) { mCache.put(url, bitmap); }
            }
            ```
    2. NetworkImageView的用法
        1. NetworkImageView控件的用法要比前两种方式更加简单，大致可以分为以下五步：
            1. 创建一个RequestQueue对象。
            1. 创建一个ImageLoader对象。
            2. 在布局文件中添加一个NetworkImageView控件。
            3. 在代码中获取该控件的实例。
            4. 设置要加载的图片地址。
        2. 其中，第一第二步和ImageLoader的用法是完全一样的，因此这里我们就从第三步开始学习了。
            ```xml
            <LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
                android:layout_width="fill_parent"
                android:layout_height="fill_parent"
                android:orientation="vertical" >
                <Button
                    android:id="@+id/button"
                    android:layout_width="wrap_content"
                    android:layout_height="wrap_content"
                    android:text="Send Request" />
                <com.android.volley.toolbox.NetworkImageView
                    android:id="@+id/network_image_view"
                    android:layout_width="200dp"
                    android:layout_height="200dp"
                    android:layout_gravity="center_horizontal"/>
            </LinearLayout>
            ```
        3. ``networkImageView = (NetworkImageView) findViewById(R.id.network_image_view);``
        4. 设置要加载的图片地址。
            ```java
            networkImageView.setDefaultImageResId(R.drawable.default_image);
            networkImageView.setErrorImageResId(R.drawable.failed_image);
            networkImageView.setImageUrl("https://img-my.csdn.net/uploads/201404/13/1397393290_5765.jpeg", imageLoader);
            ```
        5. NetworkImageView并不需要提供任何设置最大宽高的方法也能够对加载的图片进行压缩。这是由于NetworkImageView是一个控件，在加载图片的时候它会自动获取自身的宽高，然后对比网络图片的宽度，再决定是否需要对图片进行压缩。也就是说，压缩过程是在内部完全自动化的，并不需要我们关心，NetworkImageView会始终呈现给我们一张大小刚刚好的网络图片，不会多占用任何一点内存，这也是NetworkImageView最简单好用的一点吧。当然了，如果你不想对图片进行压缩的话，其实也很简单，只需要在布局文件中把NetworkImageView的layout_width和layout_height都设置成wrap_content就可以了，这样NetworkImageView就会将该图片的原始大小展示出来，不会进行任何压缩。
4. 高级用法2
    1. XmlRequest
        ```java
        public class XmlRequest extends Request<XmlPullParser> {
            private final Object mLock = new Object();
            private Response.Listener<XmlPullParser> mListener;
            public XmlRequest(String url, Response.Listener<XmlPullParser> mListener, Response.ErrorListener listener) {
                super(url, listener);
                this.mListener = mListener;
            }
            public XmlRequest(int method, String url, Response.Listener<XmlPullParser> mListener, @Nullable Response.ErrorListener listener) {
                super(method, url, listener);
                this.mListener = mListener;
            }
            @Override public void cancel() {
                super.cancel();
                synchronized (mLock) { mListener = null; }
            }
            @Override protected Response<XmlPullParser> parseNetworkResponse(NetworkResponse response) {
                String xmlString;
                try {
                    xmlString = new String(response.data, HttpHeaderParser.parseCharset(response.headers));
                } catch (UnsupportedEncodingException e) {
                    // return Response.error(new ParseError(e));
                    xmlString = new String(response.data);
                }
                try {
                    XmlPullParser xmlPullParser = XmlPullParserFactory.newInstance().newPullParser();
                    xmlPullParser.setInput(new StringReader(xmlString));
                    return Response.success(xmlPullParser, HttpHeaderParser.parseCacheHeaders(response));
                } catch (XmlPullParserException e) {
                    return Response.error(new ParseError(e));
                }
            }
            @Override protected void deliverResponse(XmlPullParser response) {
                Response.Listener<XmlPullParser> listener;
                synchronized (mLock) { listener = mListener; }
                if (listener != null) { listener.onResponse(response); }
            }
        }
        ```
    2. GsonRequest
        ```java
        public class HTTPSTrustManager implements X509TrustManager {
            private static final String TAG = "HTTPSTrustManager";
            private static TrustManager[] trustManagers;
            private static final X509Certificate[] _AcceptedIssuers = new X509Certificate[]{};
            @Override public void checkClientTrusted(X509Certificate[] x509Certificates, String s) {}
            @Override public void checkServerTrusted(X509Certificate[] x509Certificates, String s) {}
            @Override public X509Certificate[] getAcceptedIssuers() { return _AcceptedIssuers; }
            public static void allowAllSSL() {
                HttpsURLConnection.setDefaultHostnameVerifier(new HostnameVerifier() {
                    @Override public boolean verify(String arg0, SSLSession arg1) { return true; }
                });
                SSLContext context = null;
                if (trustManagers == null) { trustManagers = new TrustManager[]{new HTTPSTrustManager()}; }
                try {
                    context = SSLContext.getInstance("TLS");
                    context.init(null, trustManagers, new SecureRandom());
                } catch (NoSuchAlgorithmException e) {
                    Log.e(TAG, "NoSuchAlgorithmException", e);
                } catch (KeyManagementException e) {
                    Log.e(TAG, "KeyManagementException", e);
                }
                assert context != null;
                HttpsURLConnection.setDefaultSSLSocketFactory(context.getSocketFactory());
            }
        }
        ```
        ```java
        public abstract class GsonRequest<T> extends Request<T> {
            private final static Gson gson = new Gson();
            private final Object mLock = new Object();
            private Response.Listener<T> mListener;
            private Class<T> entityClass;
            public Class<T> getEntityClass() { return entityClass; }
            public GsonRequest(String url, Response.Listener<T> mListener, Response.ErrorListener listener) {
                super(url, listener);
                this.mListener = mListener;
                ParameterizedType genericSuperclass = (ParameterizedType) getClass().getGenericSuperclass();
                entityClass = (Class<T>) genericSuperclass.getActualTypeArguments()[0];
            }
            public GsonRequest(int method, String url, Response.Listener<T> mListener, @Nullable Response.ErrorListener listener) {
                super(method, url, listener);
                this.mListener = mListener;
                ParameterizedType genericSuperclass = (ParameterizedType) getClass().getGenericSuperclass();
                entityClass = (Class<T>) genericSuperclass.getActualTypeArguments()[0];
            }
            @Override protected Response<T> parseNetworkResponse(NetworkResponse response) {
                String jsonString;
                try {
                    jsonString = new String(response.data, HttpHeaderParser.parseCharset(response.headers));
                } catch (UnsupportedEncodingException e) {
                    jsonString = new String(response.data);
                }
                return Response.success(gson.fromJson(jsonString, entityClass), HttpHeaderParser.parseCacheHeaders(response));
            }
            @Override protected void deliverResponse(T response) {
                Response.Listener<T> listener;
                synchronized (mLock) { listener = mListener; }
                if (listener != null) { listener.onResponse(response); }
            }
            @Override public void cancel() {
                super.cancel();
                synchronized (mLock) { mListener = null; }
            }
        }
        ```
    3. 调用
        ```java
        private void testGsonRequest() {
            final Gson gson = new Gson();
            try {
                GsonRequest<Weather> gsonRequest = new GsonRequest<Weather>(json_url,
                        response -> Log.d(TAG, "get json successfully. " + gson.toJson(response)),
                        error -> Log.e(TAG, "get json failed.", error)){};
                Log.d(TAG, "gsonRequest's entityClass: " + gsonRequest.getEntityClass().getSimpleName());
                requestQueue.add(gsonRequest);
            } catch (Exception e) {
                Log.e(TAG, "cast error!", e);
            }
        }
        private void testXmlRequest() {
            XmlRequest xmlRequest = new XmlRequest(xml_url, response -> {
                Log.d(TAG, "get xml successfully. ");
                try {
                    int eventType = response.getEventType();
                    while (eventType != XmlPullParser.END_DOCUMENT) {
                        if (eventType == XmlPullParser.START_TAG) {
                            String nodeName = response.getName();
                            if ("city".equals(nodeName)) {
                                String pName = response.getAttributeValue(0);
                                Log.d(TAG, "pName is " + pName);
                            }
                        }
                        eventType = response.next();
                    }
                } catch (XmlPullParserException e) {
                    Log.d(TAG, "parse xml failed -- XmlPullParserException.", e);
                } catch (IOException e) {
                    Log.d(TAG, "parse xml failed -- IOException.", e);
                }
            }, error -> Log.d(TAG, "get xml failed.", error));
            requestQueue.add(xmlRequest);
        }
        ```
5. 高级用法3
    1. Volley类的四个主要方法
        * RequestQueue newRequestQueue(Context context, BaseHttpStack stack)
        * RequestQueue newRequestQueue(Context context, HttpStack stack) @Deprecate
        * RequestQueue newRequestQueue(Context context, Network network)
        * RequestQueue newRequestQueue(Context context)
    2. 自定义 Stack ，只需要继承 BaseHttpStack ，这个类只有一个需要重写的方法: HttpResponse executeRequest(Request<?> request, Map<String, String> additionalHeaders)
    3. 自定义 Network ，需要重写 NetworkResponse performRequest(Request<?> request)
    4. 自定义 Cache ，需要重写 get / put / initialize / invalidate / remove / clear
    5. 自定义 RetryPolicy ，需要重写 getCurrentTimeout / getCurrentRetryCount / retry
    6. 注意 RequestQueue 里面的两个接口 RequestFinishedListener<T> / RequestFileter
6. 高级用法4
    1. Request
        * setTag(Object tag) / Object getTag(): 可以根据这个 requestQueue.cancelAll 取消所有该 tag 的请求
        * setRetryPolicy(RetryPolicy retryPolicy) / RetryPolicy getRetryPolicy()
        * addMarker(String tag)： for debugging
        * setRequestQueue(RequestQueue requestQueue)
        * Request<?> setSequence(int sequence) / int getSequence(): 指定 seqNum
        * setCacheEntry(Cache.Entry entry) / Cache.Entry getCacheEntry()
        * setShouldCache(boolean shouldCache) / boolean shouldCache()
        * setShouldRetryServerErrors(boolean shouldRetryServerErrors) / boolean shouldRetryServerErrors()
        * Priority getPriority(): Priority 有 LOW / NORNAL / HIGH / IMMEDIATE
        * int getTimeoutMs()
        * Map<String, String> getHeaders()
        * String getBodyContentType() / byte[] getBody()
        * Response.ErrorListener getErrorListener()
        * int getTrafficStatsTag(): 和 android.net.TrafficStats#setThreadStatsTag(int) 相关  **???**
        * String getUrl()
        * String getCacheKey(): 获取缓存相关的 key ，默认是 url
        * cancel() / boolean isCanceled() / markDelivered()
        * boolean hasHadResponseDelivered()
    2. Response
        * interface Listener<T>: void onResponse(T response);
        * interface ErrorListener: void onErrorResponse(VolleyError error);
        * Response<T> success(T result, Cache.Entry cacheEntry)
        * Response<T> error(VolleyError error)
        * boolean isSuccess()
    3. RetryPolicy
        * int getCurrentTimeout();
        * int getCurrentRetryCount();
        * void retry(VolleyError error) throws VolleyError;
    4. RequestQueue
        * interface RequestFinishedListener<T>: void onRequestFinished(Request<T> request);
        * interface RequestFilter: boolean apply(Request<?> request);
        * Request<T> add(Request<T> request)
        * cancelAll(RequestFilter filter) / cancelAll(final Object tag)
        * void addRequestFinishedListener(RequestFinishedListener<T> listener) / void removeRequestFinishedListener(RequestFinishedListener<T> listener)
        * int getSequenceNumber()
        * Cache getCache()
    5. Cache
        * Entry get(String key);
        * void put(String key, Entry entry);
        * void initialize();
        * void invalidate(String key, boolean fullExpire);
        * void remove(String key);
        * void clear()
        * class Entry
            * byte[] data / String etag / long serverDate / long lastModified / long ttl / long softTtl
            * Map<String, String> responseHeaders = Collections.emptyMap()
            * List<Header> allResponseHeaders
            * boolean isExpired()
            * boolean refreshNeeded()
    6. NoCache
    7. DiskBasedCache
    8. VolleyLog
    9. Authenticator
    10. AndroidAuthenticator
    11. ClearCacheRequest

## NoHttp

0. links
    * [NoHttp 文档](http://doc.nohttp.net/162186)
    * [NoHttp github](https://github.com/yanzhenjie/NoHttp)
1. 

## android-async-http

## Ksoap2 与 REST

## Glide

1. links
    * [Android实战——Glide的使用，加载图片只要一句话](https://blog.csdn.net/qq_30379689/article/details/60373696) finished
    * [android Glide简单使用](https://blog.csdn.net/bzlj2912009596/article/details/81702367) finished
    * [Glide最新版V4使用指南](https://blog.csdn.net/u013005791/article/details/74532091)
    * [Glide系列1](https://blog.csdn.net/u010356768/article/category/7264668)
    * [Glide系列2](https://so.csdn.net/so/search/s.do?q=glide&t=blog&u=mingyunxiaohai)
    * [Glide系列3](https://blog.csdn.net/sinyu890807/column/info/15318)
    * [glide github](https://github.com/bumptech/glide)
    * [glide-transform github](https://github.com/wasabeef/glide-transformations)
    * [glide系统2](https://blog.csdn.net/yulyu/article/details/55261439)
    * [glide源码](https://blog.csdn.net/guolin_blog/article/details/53939176)
2. glide入门
    1. Glide是一个快速和有效的开源媒体管理和图像加载Android框架包装媒体解码，内存和磁盘缓存，和资源汇集成一个简单和易于使用的界面。其优点有
        - 使用简单
        - 可配置度高，自适应程度高
        - 支持常见图片格式，jpg、png、gif、webp
        - 支持多种数据源，网络、资源、assets 、File、Uri等
        - 高效缓存策略支持内存和硬盘缓存，图片只要下载一次，下次就直接从缓存中读取了
        - 生命周期集成根据Activity/Fragment生命周期自动管理请求
        - 高效处理Bitmap
    2. 一些警示
        - 对于图片请求会在onStop的时候自动暂停，然后在onStart的时候重新启动，gif的动画也会在onStop的时候停止，以免在后台消耗电量。
        - 此外，当设备的网络状态发生改变的时候，所有失败的请求会自动重启，保证数据的正确性，还是比较人性化、自动化的。  
        - Glide提供多种缓存机制，对于图片原图和Resize的图片可以自由缓存，它相比于Picasso，内存消耗要小很多。  
        - Glide使用最好是在主线程中使用，因为它需要context，在非主线程中使用Glide可能会导致内存泄露或者更严重的Crash。
        - 相信大家多Context的使用应该是非常谨慎的，非要在非主线程使用Glide的话就将context换成getApplicationContext。
    3. gradle 与 权限
        ```groovy
        implementation 'com.github.bumptech.glide:glide:4.8.0'
        annotationProcessor 'com.github.bumptech.glide:compiler:4.8.0'
        ```
        ```xml
        <uses-permission android:name="android.permission.INTERNET" />
        <!-- 用于硬盘缓存和读取 -->
        <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />
        <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
        <!-- 它可以监听用户的连接状态并在用户重新连接到网络时重启之前失败的请求 -->
        <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE"/>
        ```
    4. 基本使用
        ```java
        Glide
            .with(Context context)  // 初始化，因为 Activity/Application/Fragment/FragmentActivity 都继承了 Context，所以应该都可以使用
            // 注意.with()里面的参数，Glide的请求是和传进去的Context共存亡的，如果传一个Activity进去，当Activity GC过后，你的请求也就GC了，但是如果这样传：.with(context.getApplicationContext() ).当你的Activity GC过后，请求还是会继续，回调还是会继续。
            .load("http://xxx.png")  // 还支持 "file:///xxx.png" | R.drawable.xxx | file | uri | byte[]
            .asBitmap()  // or asGif()
            .into(imageView)  // or into(int h, int w).get() /* 返回Bitmap */ or
            // .into(new SimpleTarget<Bitmap>() {
            //     @Override public void onResourceReady(Bitmap bitmap, GlideAnimation glideAnimation) {
            //         imageView.setImageBitmap(bitmap);
            //     }
            // })
        ```
3. glide深入1
    1. Target: 不要写成匿名内部类的机制，原因就是java的自动垃圾回收机制可能在图片还没有加载好的时候就已经把你的Target回收了。
        ```java
        new Target<Bitmap>() {
            @Override public void onLoadStarted(Drawable placeholder) { /* 设置加载过程中的Drawable */ }
            @Override public void onLoadFailed(Exception e, Drawable errorDrawable) { /* 设置加载失败的Drawable */ }
            @Override public void onResourceReady(Bitmap resource, GlideAnimation<? super Bitmap> glideAnimation) { /* 设置加载成功的Bitmap */ }
            @Override public void onLoadCleared(Drawable placeholder) { /* 设置加载被取消时的Drawable */ }
            @Override public void getSize(SizeReadyCallback cb) {}
            @Override public void setRequest(Request request) {}
            @Override public Request getRequest() { return null; }
            @Override public void onStart() {}
            @Override public void onStop() {}
            @Override public void onDestroy() {}
        }
        ```
    2. 其他的一些小技巧1
        ```java
        .placeholder(R.drawable.placeholder)  // 加载中
        .error(R.drawable.error)  // 加载失败
        .load(null).fallback(R.drawable.Xxx)  // 传递null时，这个callback方法就会被调用。
        .thumbnail(0.1f)  // 先加载缩略图 然后在加载全图
        .thumbnail(Glide.with(context).load(url))  // 指定缩略图
        .crossFade()  // 淡入淡出效果，注意crossFade可以传入时间，注意这个是默认的。
        .fadeFade(int duration)  // 可以设置时间
        .dontAnimate()  // 无动画
        .animate(R.anim.alpha_in)  // 自定义动画
        .listener(RequestListener listener)  // 设置监听回调
        .override(int w, int h)  // 指定尺寸
        .centerCrop()  // 截取中间部分(应该有默认值)
        .fitCenter()  // 等比拉伸填充(应该有默认值)
        ```
    3. 其他的一些小技巧2
        ```java
        .priority(Priority.HIGH)  // 设置图片请求的优先级
        .pauseRequests()  // 暂停请求
        .resumeRequests()  // 回复请求
        .downloadOnly(int width, int height)  // 在后台线程当中进行加载和缓存 @Depreated
        .downloadOnly(Y extends Target<File> target)  // @Depreated
        .asFile().submit()  // 阻塞住，直到得到 FutureTarget<File> 结果
        // 得到的 FutureTarget<File> 需要使用 Glide.with(getApplicationContext()).clear(futureTarget) 清除
        // 还可以 asBitmap().submit() 这样可得到 FutureTarget<Bitmap> 结果
        .transition(withCrossFade())  // 用于决定你的加载完成时会发生什么。(淡入淡出动画)
        .asFile | .asGif | .asBitmap | .asDrawable
        ```
4. glide深入2
    1. Glide从4.0开始，使用的时候多了一个注解处理器 (Annotation Processor)，主要用于我们自定义的时候自动生成一些类，帮助我们简化操作。或者定义一些全局的常用的方法。
        1. 自定义的方法：需要重写AppGlideModule
            ```java
            @GlideModule
            public class MyAppGlideModule extends AppGlideModule {
                @Override
                public void applyOptions(@NonNull Context context, @NonNull GlideBuilder builder) {
                    super.applyOptions(context, builder);
                }
                @Override
                public void registerComponents(@NonNull Context context, @NonNull Glide glide, @NonNull Registry registry) {
                    super.registerComponents(context, glide, registry);
                }
            }
            ```
        2. 我们不必去重写 AppGlideModule 中的任何一个方法。子类中完全可以不用写任何东西，它只需要继承 AppGlideModule 并且添加 @GlideModule 注解。这里我们重写了两个方法，后面只需要在applyOptions()和registerComponents()这两个方法中加入具体的逻辑，就能实现更改Glide配置或者替换Glide组件的功能了。
        3. 如果要使用我们自定义的module，定义玩上面的类后，Android Studio中点击菜单栏Build -> Rebuild Project重新编译然后代码中变为GlideApp开头。
            ```java
            GlideApp.with(fragment)
                .load(myUrl)
                .placeholder(R.drawable.placeholder)
                .fitCenter()
                .into(imageView);
            ```
    2. Glide中的大部分设置项都可以通过 RequestOptions 类和 apply() 方法来应用到程序中。
        ```java
        RequestOptions options = new RequestOptions()
            .placeholder(R.mipmap.ic_launcher)//加载成功之前占位图
            .error(R.mipmap.ic_launcher)//加载错误之后的错误图
            .override(400,400)//指定图片的尺寸
            //指定图片的缩放类型为fitCenter (等比例缩放图片，宽或者是高等于ImageView的宽或者是高。)
            .fitCenter()
            //指定图片的缩放类型为centerCrop (等比例缩放图片，直到图片的狂高都大于等于ImageView的宽度，然后截取中间的显示。)
            .centerCrop()
            .circleCrop()//指定图片的缩放类型为centerCrop (圆形)
            .skipMemoryCache(true)//跳过内存缓存
            .diskCacheStrategy(DiskCacheStrategy.ALL)//缓存所有版本的图像
            .diskCacheStrategy(DiskCacheStrategy.NONE)//跳过磁盘缓存
            .diskCacheStrategy(DiskCacheStrategy.DATA)//只缓存原来分辨率的图片
            .diskCacheStrategy(DiskCacheStrategy.RESOURCE)//只缓存最终的图片
            ;
        Glide.with(this)
            .load(url)
            .apply(options)
            .into(imageView);
        ```
    3. 如果使用了自定义的API，centerCrop()，fitCenter()，circleCrop()可以省略RequestOptions 这一步，更简单
        ```java
         GlideApp.with(this)
            .load(url)
            .placeholder(R.mipmap.ic_launcher)
            .centerCrop()
            .fitCenter()
            .circleCrop()
            .override(400,400)
            .into(imageView);
        ```
5. glide深入3
    1. 设置缓存
        1. base
            ```java
            // 设置跳过内存缓存
            Glide.with(this).load(imageUrl).skipMemoryCache(true).into(imageView);
            // 设置缓存策略
            Glide.with(this).load(imageUrl).diskCacheStrategy(DiskCacheStrategy.ALL).into(imageView);
                // DiskCacheStrategy.ALL：缓存源资源和转换后的资源，缓存所有版本的图片,默认模式
                // DiskCacheStrategy.NONE：不作任何磁盘缓存，再一张图片变化很快速时缓存起来是没有作用的
                // DiskCacheStrategy.SOURCE：缓存源资源，仅缓存原图(全分辨率的图片)
                // DiskCacheStrategy.RESULT：缓存转换后的资源，仅缓存最终的图片,即修改了尺寸或者转换后的图片
            // 清理磁盘缓存，需要在子线程中执行
            Glide.get(this).clearDiskCache();
            // 清理内存缓存，可以在UI主线程中进
            Glide.get(this).clearMemory();
            ```
        2. 在GlideModule中，我们可���设置磁盘缓存的位置，磁盘缓存的大小和内存缓存的大小，同时还可以设置图片的显示质量。要是用GlideModule，需要创建它的实现类，然后在manifests中申明实现类的全类路径
            ```xml
            <meta-data android:name="com.example.mchenys.httputilsdemo.image.glide.module.SimpleGlideModule" android:value="GlideModule" />
            ```
        3. GlideModule的实现类，需要实现applyOptions方法  https://blog.csdn.net/bzlj2912009596/article/details/81702367
            ```java
            /**
             * 要创建一个额外的类去定制 Glide。下一步是要全局的去声明这个类，让 Glide 知道它应该在哪里被加载和使用。
             * Glide 会扫描 AndroidManifest.xml 为 Glide module 的 meta 声明。
             * 因此，你必须在 AndroidManifest.xml 的 <application> 标签内去声明这个SimpleGlideModule。
             */
            public class SimpleGlideModule implements GlideModule {
                public static DiskCache cache;
                @Override
                public void applyOptions(Context context, GlideBuilder builder) {
                    // 在 Android 中有两个主要的方法对图片进行解码: ARGB8888 和 RGB565 。前者为每个像素使用了 4 个字节，
                    // 后者仅为每个像素使用了 2 个字节。ARGB8888 的优势是图像质量更高以及能存储一个 alpha 通道。
                    // Picasso 使用 ARGB8888，Glide 默认使用低质量的 RGB565。
                    // 对于 Glide 使用者来说：你可以使用 Glide module 方法去改变解码规则。
                    builder.setDecodeFormat(DecodeFormat.PREFER_ARGB_8888);
                    // 设置缓存目录
                    File cacheDir = PathUtils.getDiskCacheDir(context, CacheConfig.IMG_DIR);
                    cache = DiskLruCacheWrapper.get(cacheDir, DiskCache.Factory.DEFAULT_DISK_CACHE_SIZE);  // 250 MB
                    builder.setDiskCache(new DiskCache.Factory() {
                        @Override
                        public DiskCache build() {
                            return cache;
                        }
                    });
                    // 设置memory和Bitmap池的大小
                    MemorySizeCalculator calculator = new MemorySizeCalculator(context);
                    int defaultMemoryCacheSize = calculator.getMemoryCacheSize();
                    int defaultBitmapPoolSize = calculator.getBitmapPoolSize();
                    int customMemoryCacheSize = (int) (1.2 * defaultMemoryCacheSize);
                    int customBitmapPoolSize = (int) (1.2 * defaultBitmapPoolSize);
                    builder.setMemoryCache(new LruResourceCache(customMemoryCacheSize));
                    builder.setBitmapPool(new LruBitmapPool(customBitmapPoolSize));
                }
                @Override
                public void registerComponents(Context context, Glide glide) {}
            }
            ```
    2. BitmapTransformation
        1. ``implementation 'jp.wasabeef:glide-transformations:4.0.1'``  // implementation 'jp.co.cyberagent.android:gpuimage:2.x.x' (for GPU)
        2. 使用
            ```java
            // 实现高斯模糊，radius取值1-25，值越大图片越模糊
            Glide.with(context).load(url).apply(bitmapTransform(new BlurTransformation(radius))).into(imageView);
            // 圆角
            Glide.with(context).load(url).apply(bitmapTransform(new RoundedCornersTransformation(radius, margin, CornerType))).into(imageView);
            // 黑白
            Glide.with(this).load(url).apply(bitmapTransform(new GrayscaleTransformation())).into(imageView);
            // 遮盖
            Glide.with(this).load(url).apply(bitmapTransform(new MaskTransformation(R.mipmap.ic_launcher))).into(imageView);
            // 混合
            MultiTransformation multi = new MultiTransformation(
                new BlurTransformation(25),
                new RoundedCornersTransformation(128, 0, RoundedCornersTransformation.CornerType.BOTTOM))))
            Glide.with(this).load(R.drawable.demo).apply(bitmapTransform(multi)).into(imageView);
            ```
        3. 基本分类
            - Crop: CropTransformation(默认), CropCircleTransformation(圆形), CropSquareTransformation(方形), RoundedCornersTransformation(圆角)
            - Color: ColorFilterTransformation(颜色覆盖), GrayscaleTransformation(置灰)
            - Blur: BlurTransformation(毛玻璃)
            - Mask: MaskTransformation(遮盖)
            - GPU Filter (use GPUImage), Will require add dependencies for GPUImage:
                - ToonFilterTransformation, SepiaFilterTransformation, ContrastFilterTransformation
                - InvertFilterTransformation, PixelationFilterTransformation, SketchFilterTransformation
                - SwirlFilterTransformation, BrightnessFilterTransformation, KuwaharaFilterTransformation VignetteFilterTransformation
        4. transform方法是不支持多次调用的,如果你调用了两次,那么第二次的会覆盖了第一次的效果，但是他有一个重载的方法可以传入多个对象,这样传入的变形器都能够生效
    3. 图片裁剪
        1. ImageView的ScaleType一共有8种属性:
            - matrix: 不缩放,图片与控件左上角对齐,当图片大小超过控件时将被裁剪
            - center: 不缩放,图片与控件中心点对齐,当图片大小超过控件时将被裁剪
            - centerInside: 以完整显示图片为目标,不剪裁,当显示不下的时候将缩放,能够显示的情况下不缩放
            - centerCrop: 以填满整个控件为目标,等比缩放,超过控件时将被裁剪(宽高都要填满,所以只要图片宽高比与控件宽高比不同时,一定会被剪裁)
            - fitCenter(默认): 自适应控件,不剪裁,在不超过控件的前提下,等比缩放到最大,居中显示
            - fitStart: 自适应控件,不剪裁,在不超过控件的前提下,等比缩放到最大,靠左(上)显示
            - fitEnd: 自适应控件,不剪裁,在不超过控件的前提下,等比缩放到最大,靠右(下)显示
            - fitXY: 以填满整个控件为目标,不按比例拉伸或缩放(可能会变形),不剪裁
        2. Glide有两个方法可以设置图片剪裁的策略: fitCenter()、centerCrop()。这两个方法其实都是通过调用transform方法来对图片进行处理。当你没有调用上述两个方法,并且也没有调用transform方法的时候,在Glide调用into方法时,会根据你设置的ScaleType来做处理。
        3. 有一点要注意的就是fitCenter和centerCrop方法与transform方法可以共存,但是有时候会互相影响,如果说圆角处理遇到了剪裁,圆角那一部分可能会刚好被剪裁掉了。
6. glide深入4
    1. 自定义裁剪
        1. 圆角处理
            ```java
            public  class CornersTransform extends BitmapTransformation {
                private float radius;
                public CornersTransform(Context context) {
                    this(context, 10);
                }
                public CornersTransform(Context context, float radius) {
                    super(context);
                    this.radius = radius;
                }
                @Override protected Bitmap transform(BitmapPool pool, Bitmap source, int outWidth, int outHeight) {
                    if (source == null) return null;
                    Bitmap result = pool.get(source.getWidth(), source.getHeight(), Bitmap.Config.ARGB_8888);
                    if (result == null) {
                        result = Bitmap.createBitmap(source.getWidth(), source.getHeight(), Bitmap.Config.ARGB_8888);
                    }
                    Canvas canvas = new Canvas(result);
                    Paint paint = new Paint();
                    paint.setShader(new BitmapShader(source, BitmapShader.TileMode.CLAMP, BitmapShader.TileMode.CLAMP));
                    paint.setAntiAlias(true);
                    RectF rectF = new RectF(0f, 0f, source.getWidth(), source.getHeight());
                    canvas.drawRoundRect(rectF, radius, radius, paint);
                    return result;
                }
                @Override
                public String getId() {
                    return getClass().getName();
                }
            }
            ```
        2. CustomShapeTransformation
            ```java
            public class CustomShapeTransformation extends BitmapTransformation {
                private Paint mPaint; // 画笔
                private Context mContext;
                private int mShapeRes; // 形状的drawable资源
                public CustomShapeTransformation(Context context, int shapeRes) {
                    super(context);
                    mContext = context;
                    mShapeRes = shapeRes;
                    mPaint = new Paint();
                    mPaint.setXfermode(new PorterDuffXfermode(PorterDuff.Mode.SRC_IN));
                }
                @Override public Bitmap transform(BitmapPool pool, Bitmap toTransform, int outWidth, int outHeight) {
                    // 获取到形状资源的Drawable对象
                    Drawable shape = ContextCompat.getDrawable(mContext, mShapeRes);
                    float shapeWidth = shape.getMinimumWidth(); // 形状的宽
                    float shapeHeight = shape.getMinimumHeight(); // 形状的高
                    int width = toTransform.getWidth(); // 图片的宽
                    int height = toTransform.getHeight(); // 图片的高
                    if (width > height) {
                        // 如果图片的宽大于高，则以高为基准，以形状的宽高比重新设置宽度
                        width = (int) (height * (shapeWidth / shapeHeight));
                    } else {
                        // 如果图片的宽小于等于高，则以宽为基准，以形状的宽高比重新设置高度度
                        height = (int) (width * (shapeHeight / shapeWidth));
                    }
                    // 居中裁剪图片，调用Glide库中TransformationUtils类的centerCrop()方法完成裁剪，保证图片居中且填满
                    final Bitmap toReuse = pool.get(width, height, toTransform.getConfig() != null
                            ? toTransform.getConfig() : Bitmap.Config.ARGB_8888);
                    Bitmap transformed = TransformationUtils.centerCrop(toReuse, toTransform, width, height);
                    if (toReuse != null && toReuse != transformed && !pool.put(toReuse)) {
                        toReuse.recycle();
                    }
                    // 根据算出的宽高新建Bitmap对象并设置到画布上
                    Bitmap bitmap = Bitmap.createBitmap(width, height, Bitmap.Config.ARGB_8888);
                    Canvas canvas = new Canvas(bitmap);
                    // 设置形状的大小与图片的大小一致
                    shape.setBounds(0, 0, width, height);
                    // 将图片画到画布上
                    shape.draw(canvas);
                    // 将裁剪后的图片画得画布上
                    canvas.drawBitmap(transformed, 0, 0, mPaint);
                    return bitmap;
                }
                @Override
                public String getId() {
                    // 用于缓存的唯一标识符
                    return "CustomShapeTransformation" + mShapeRes;
                }
            }
            ```
    2. 集成: 替换掉自带的HttpClient，版本查询: https://github.com/bumptech/glide/wiki/Integration-Libraries
        1. Glide包含一些小的、可选的集成库，目前Glide集成库当中包含了访问网络操作的Volley和OkHttp：
            ```groovy
            dependencies {
                compile 'com.github.bumptech.glide:volley-integration:1.2.2'
                compile 'com.mcxiaoke.volley:library:1.0.5'
                // or
                compile 'com.github.bumptech.glide:okhttp-integration:1.2.2'
                compile 'com.squareup.okhttp:okhttp:2.0.0'
            }
            ```
        2. application中
            ```xml
            <meta-data android:name="com.bumptech.glide.integration.volley.VolleyGlideModule" android:value="GlideModule" />
            <!-- or -->
            <meta-data android:name="com.bumptech.glide.integration.okhttp.OkHttpGlideModule" android:value="GlideModule" />
            <!-- 注意如果多个集成，那么最后一个才有效 -->
            ```
        3. 然后改变混淆文件
            ```
            -keep class com.bumptech.glide.integration.volley.VolleyGlideModule
            #or
            -keep public class * implements com.bumptech.glide.module.GlideModule
            -keep class com.bumptech.glide.integration.okhttp.OkHttpGlideModule
            #or
            -keep public class * implements com.bumptech.glide.module.GlideModule
            ```
        4. Glide如同ImageLoader一样，也是可以配置一些属性的，Glide可以在GlideModel中统一配置其属性。Glide允许一个应用当中存在多个GlideModules，但是Glide并不会按照一个特殊的顺序去调用已注册的GlideModules。如果一个应用的多个依赖工程当中有多个相同的Modules，就有可能会产生冲突。如果一个冲突是不可避免的，应用应该默认去定义一个自己的Module,用来手动地处理这个冲突，在进行Manifest合并的时候，可以用下面的标签排除冲突的Module
            ```xml
            <meta-data android:name="com.example.jianglei.glidedemo.GlideModelConfig" tools:node="remove"/>
            ```
    3. 注意事项
        1. Glide内部封装了所有的细节，什么网络请求，什么缓存机制，当所有都就绪过后，自动切换回UI线程，更新ImageView。？？？
        2. 如果传给into().的是一个ImageView，但是图片的size比ImageView的Size大，Glide为了节省时间，会加载小的那个size的Image。但是这对Target并不适用，以为这里并不知道Size。但是如果知道image应该多大，可以传递给Target。如 new SimpleTarget<Bitmap>(250, 200) { ... }
        3. Target 下有 SimpleTarget / ViewTarget(适用于想Glide加载到自定义View中去) / notificationTarget / AppWidget
        4. asGif可以加载gif图，asBitmap可以加载静态gif图即gif图的第一帧，如果非gif图用asGif方法加载呢？这时候会报错。Glide默认可以自动识别图片格式，加载gif图，所以在不确定图片格式的情况下，不要直接写asGif哦。
        5. You cannot start a load for a destroyed activity这样的异常如何处理？记住不要再非主线程里面使用Glide加载图片，如果真的使用了，请把context参数换成getApplicationContext。希望可以帮你避免这个问题。
        6. 为什么有的图片第一次加载的时候只显示占位图，第二次才显示正常的图片呢？如果你刚好使用了这个圆形Imageview库或者其他的一些自定义的圆形Imageview，而你又刚好设置了占位的话，那么，你就会遇到第一个问题。如何解决呢？
            1. 不设置占位
            2. 使用Glide的Transformation API自定义圆形Bitmap的转换。
            3. 使用Target
        7. 有时候你会发现网络加载完了之后会有拉伸现象，而你的控件大小明明是自适应的呀，这是为什么呢，请你检查下你是否设置了占位图，有的话请去掉就ok了。

## Fresco

0. links
    * [Android高效加载大图、多图解决方案，有效避免程序OOM](https://blog.csdn.net/guolin_blog/article/details/9316683)
    * [Fresco github](https://github.com/facebook/fresco)
    * [Fresco-processors](https://github.com/wasabeef/fresco-processors)
    * [fresco 中文文档](https://www.fresco-cn.org/docs/index.html)
    * [fresco系列1](https://so.csdn.net/so/search/s.do?q=fresco&t=blog&u=xuyueqing1225)
    * [fresco系列2](https://blog.csdn.net/y1scp/article/details/49245535)
    * http://blog.csdn.net/android_ls/article/details/53137867
    * https://www.jianshu.com/p/976c86fa72bc
1. fresco初识
    1. 引入
        1. ``implementation 'com.facebook.fresco:fresco:2.0.0'``
        2. 按需添加
            ```groovy
            dependencies {
                // 支持 GIF 动图，需要添加
                compile 'com.facebook.fresco:animated-gif:2.0.0'
                // 支持 WebP (静态图+动图)，需要添加
                compile 'com.facebook.fresco:animated-webp:2.0.0'
                compile 'com.facebook.fresco:webpsupport:2.0.0'
                // 仅支持 WebP 静态图，需要添加
                compile 'com.facebook.fresco:webpsupport:2.0.0'
                // 在 API < 14 上的机器支持 WebP 时，需要添加
                compile 'com.facebook.fresco:animated-base-support:0.12.0'
                // Provide the Android support library (you might already have this or a similar dependency)
                // 提供Android支持库(您可能已经拥有此类或相似的依赖项)
                implementation 'com.android.support:support-core-utils:24.2.1'
            }
            ```
        3. 在 Application 中初始化
            ```java
            public class MyApplication extends Application {
                @Override public void onCreate() {
                    super.onCreate();
                    Fresco.initialize(this);
                }
            }
            ```
        4. 需要声明的权限与 Glide 类似
    2. 基本使用
        1. xml
            ```xml
            <com.facebook.drawee.view.SimpleDraweeView
                android:id="@+id/my_image_view"
                android:layout_width="130dp"
                android:layout_height="130dp"
                fresco:placeholderImage="@drawable/my_drawable"/>
            ```
        2. java
            ```java
            Uri uri = Uri.parse("https://raw.githubusercontent.com/facebook/fresco/gh-pages/static/logo.png");
            SimpleDraweeView draweeView = (SimpleDraweeView) findViewById(R.id.my_image_view);
            draweeView.setImageURI(uri);
            ```
        3. 剩下的，Fresco会替你完成:
            - 显示占位图直到加载完成；
            - 下载图片；
            - 缓存图片；
            - 图片不再显示时，从内存中移除；
    3. https://frescolib.org/docs/shipping.html 让App更小，尽管Fresco这么大

## Piscsso

0. links
    * [picasso github](https://github.com/square/picasso)
    * [picasso-transfrom github](https://github.com/TannerPerrien/picasso-transformations)
1. Piscsso初识

## Protocol

1. 

## Dagger2

1. links
    1. [dagger2 github](https://github.com/google/dagger)
    2. [神兵利器Dagger2](https://zhuanlan.zhihu.com/p/24454466)

## ButterKnife

1. links
    1. [ButterKnife基本使用](https://segmentfault.com/a/1190000016460847)
    2. [ButterKnife github](https://github.com/JakeWharton/butterknife)
2. 使用方法1
    1. 主Module中配置
        ```groovy
        android {
            compileOptions {
                sourceCompatibility JavaVersion.VERSION_1_8
                targetCompatibility JavaVersion.VERSION_1_8
            }
        }
        dependencies {
            implementation "com.jakewharton:butterknife:10.1.0"
            annotationProcessor 'com.jakewharton:butterknife-compiler:10.1.0'
        }
        ```
    2. 简单使用
        ```java
        class ExampleActivity extends Activity {
            @BindView(R.id.user) EditText etUsername;
            @BindView(R.id.pass) EditText etPassword;
            @BindString(R.string.login_error) String loginErrorMsg;
            @OnClick(R.id.submit) void submit(View v) { /* ... */ }
            @Override public void onCreate(Bundle savedInstanceState) {
                super.onCreate(savedInstanceState);
                setContentView(R.layout.simple_activity);
                ButterKnife.bind(this);  // 自动生成代码用于将上面的字段初始化和绑定事件  // ButterKnife.bind(this)必须在初始化绑定布局文件之后,否则会报错
                // use this fields
            }
        }
        ```
    3. 在Library中配置和使用
        ```groovy
        // 在根目录的build.gradle中
        buildscript {
            repositories {
                google()
                maven()
                mavenCentral()
            }
            dependencies {
                classpath "com.jakewharton:butterknife-gradle-plugin:10.1.0"
            }
        }
        // 在module的build.gradle中
        apply plugin: "com.android.library"
        apply plugin: "com.jakewharton.butterknife"
        ```
        ```java
        class ExampleActivity extends Activity {
            @BindView(R2.id.user) EditText etUser;
            @BindView(R2.id.pass) EditText etPass;
            // ...
        }
        ```
3. 使用方法2
    1. Activity: ButterKnife.bind(this)必须在初始化绑定布局文件之后,否则会报错
    2. Fragment: 在Fragment中需要在视图销毁时解绑Butterknife,否则会造成内存泄漏
        ```java
        public class ExampleFragment extends Fragment {
            private Unbinder unbinder;
            @BindView(R.id.example) Button btnExample;
            @Nullable @Override public void onCreateView(LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {
                View view = View.inflate(getContext(), R.layout.fragment_example, null);
                unbinder = ButterKnife.bind(this, view);
                return view;
            }
            @Override public void onDestroyView() {
                super.onDestroyView();
                unbinder.unbind();
            }
        }
        ```
    3. Adapter: 在Adapter的ViewHolder中绑定Butterknife
        ```java
        @Nullable @Override public MyViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
            View itemView = LayoutInflater.from(parent.getContext()).inflate(R.layout.recy_dynamic_state_item, parent, false);
            MyViewHolder myViewHolder = new MyViewHolder(itemView);  // 此处将view传入
            itemView.setOnClickListener(this);
            return myViewHolder;
        }
        public class MyViewHodler extends RecyclerView.ViewHolder {
            @BindView(R.id.iv_photo) SimpleDraweeView simpleDraweeView;
            @BindView(R.id.tv_title) TextView tvTitle;
            @BindView(R.id.tv_detail) TextView tvDetail;
            @BindView(R.id.date) TextView date;
            @BindView(R.id.avatar_user) SimpleDraweeView avatarUser;
            @BindView(R.id.username) TextView userName;
            public MyViewHolder(View itemView) {
                super(itemView);
                ButterKnife.bind(this, itemView);  // 此处进行绑定
            }
        }
        ```
4. 使用方法3
    1. 常用字段注解
        1. 单个控件id注解: @BindView(R.id.user) EditText etUser;
        2. 布局内多个控件id注解: @BindViews({ R.id.btn1, R.id.btn2, R.id.btn3 }) List<Button> buttons;
        3. 绑定string字符串: @BindString(R.string.error_msg) String errorMsg;
        4. 绑定array数组: @BindArray(R.array.weather) String[] weathers;
            ```xml
            <resources>
                <string name="app_name">开眼视频</string>
                <string-array name="weather">
                    <item>高温</item>
                    <item>低温</item>
                    <item>阴天</item>
                    <item>雨天</item>
                    <item>晴天</item>
                </string-array>
            </resources>
            ```
        5. 绑定颜色值: @BindColor(R.color.colorPrimary) int colorPrimary;
        6. 绑定Bitmap: @BindBitmap(R.mipmap.ic_launcher) Bitmap bitmap;
        7. 其他资源绑定:
            ```java
            @BindBool(R.bool.is_tablet) boolean isTablet;  // 绑定真假boolean
            @BindFont(R.font.comic_sans) Typeface comicSans;  // 绑定字体文字
            @BindDimen(R.dimen.horizontal_gap) int gapPx;  // 绑定尺寸
            @BindDimen(R.dimen.horizontal_gap) float gap;  // 绑定尺寸
            @BindAnim(R.anim.fade_in) Animation fadeIn;  // 绑定动画
            @BindDrawable(R.drawable.placeholder) Drawable placeholder;  // 绑定Drawable
            ```
    2. 常用方法注解
        1. 绑定控件点击事件: ``@OnClick(R.id.button) public void onClick(View v) { /**/ }``  // @OnClick({ R.id.share_wechat,R.id.share_moments,R.id.share_weibo })
        2. 绑定控件长按事件: ``@OnLongClick({ R.id.btn1, R.id.btn2 }) public boolean onLongClick(View v) { /**/ }``
        3. 绑定Item点击事件: ``@OnItemClick(R.id.example_list) public void onItemClick(int position) { /**/ }``  // 支持ListView，不知道支不支持RecycleView
        4. 绑定Item长按事件: ``@OnItemLongClick(R.id.example_list) public boolean onItemLongClick(int position) {}``  // 返回true则可以拦截onItemClick
        5. 绑定Item选择事件: ``@OnItemSelected(R.id.example_list) public void onItemSelected(int position) {}``
        6. 绑定选中取消事件: ``@OnCheckedChanged(R.id.example) public void onChecked(boolean checked) { /**/ }``
        7. 绑定软键盘功能按键: ``@OnEditorAction(R.id.example) public boolean onEditorAction(KeyEvent key) { /**/ }``
        8. 绑定焦点改变事件: ``@OnFocusChange(R.id.example) public void onFocusChanged(boolean focused) {}``
        9. 绑定文本变化事件: ``@OnTextChanged(R.id.example) public void onTextChanged(CharSequence text) {}``
        10. 绑定页面改变事件: ``@OnPageChange(R.id.example_pager) public void onPageSelected(int position) {}``
        11. 绑定触摸事件: ``@OnTouch(R.id.example) public boolean onTouch() {}``
    3. Action接口与Setter接口
        ```java
        // Action接口主要是为了对View或者Views进行管理初始化等操作，而Setter接口其实就是对view或者views的属性或者值进行操作。使用ButterKnife.apply()方法启用接口。
        ButterKnife.Action<View> action = new ButterKnife.Action<View>() {
            @Override public void apply(@NonNull View view, int index) {
                if (view instanceof Button){
                    Button button = (Button) view;
                    button.setText("点击我");
                }
            }
        };
        ButterKnife.Setter<View,Boolean> setter = new ButterKnife.Setter<View, Boolean>() {
            @Override
            public void set(@NonNull View view, Boolean value, int index) {
                view.setEnabled(value);
            }
        };
        @Override protected void onCreate(Bundle savedInstanceState) {
            super.onCreate(savedInstanceState);
            setContentView(R.layout.activity_main);
            ButterKnife.bind(this);
            ButterKnife.apply(buttons, action);  // 初始化或修改每个view的属性值
            ButterKnife.apply(buttons, setter, true);
        }
        ```
    4. 当熟悉了Butterknife的基本用法后，有时候还是要写很多@BindView()之类的，是不是很烦，没关系，最后教你们一招偷懒的方式，当然是用插件了，嘿嘿。
        1. 搜索安装Butterknife Zelezny插件
        2. 右击Generate选择最后的generate butterknife injections
5. 源码解读1

## ORM

## Hermes

[](https://github.com/Xiaofei-it/Hermes)
[Hermes--新颖巧妙易用的Android进程间通信IPC框架](https://www.jianshu.com/p/c18befa71e28)
[](https://github.com/Xiaofei-it/HermesEventBus)
[HermesEventBus-饿了么开源的Android跨进程事件分发框架](https://blog.csdn.net/jdsjlzx/article/details/52279314)

## 适配

1. 屏幕适配
    * [](https://github.com/yatoooon/AndroidScreenAdaptation)
    * [Android屏幕适配全攻略(最权威的官方适配指导)](https://blog.csdn.net/jdsjlzx/article/details/45891551)
2. 状态栏适配 https://www.jianshu.com/p/353074f1d155
    1. 调用系统API直接实现
        ```xml
        <style name="AppTheme" parent="Theme.AppCompat.Light.NoActionBar">
            <item name="colorPrimaryDark">#339df5</item>
        </style>
        <!-- 该styles.xml需要放置到values-19还是valuse-21中才能生效(具体哪个版本开始支持有点忘了，自己试下就知道)。 -->
        ```
        ```java
        // 或者直接使用java代码
        getWindow().setStatusBarColor(Color.parseColor("#339df5"));
        setContentView(R.layout.activity_main);
        ```
    2. styles.xml配置+代码调用
        ```xml
        <style name="StatusBarTheme" parent="Theme.AppCompat.Light.NoActionBar">
            <item name="android:windowTranslucentStatus">true</item> <!-- 该属性的作用就是将整体布局延伸到状态栏的底部 -->
        </style>
        ```
        ```java
        // 此时还需要配合代码让整体布局往下移动状态栏高度的位移，代码很简单
        findViewById(R.id.title).setPadding(0,statuBarHeight,0,0);
        ```
    3. 开源项目中使用到的方法
        ```xml
        <android.support.v4.widget.DrawerLayout
            android:id="@+id/drawerLayout"
            android:fitsSystemWindows="true"
            android:layout_width="match_parent"
            android:layout_height="match_parent">
            <include
                layout="@layout/main_pager"
                android:layout_width="match_parent"
                android:layout_height="match_parent" />
            <LinearLayout
                android:layout_width="match_parent"
                android:layout_height="match_parent"
                android:layout_gravity="start"
                android:background="#ff0000"
                android:orientation="vertical">
            </LinearLayout>
        </android.support.v4.widget.DrawerLayout>
        ```
        ```java
        // 然后在java中
        findViewById(R.id.drawerLayout).setFitsSystemWindows(false);
        getWindow().setStatusBarColor(Color.TRANSPARENT);
        findViewById(R.id.title).setPadding(0, statusBarHeight, 0, 0);
        ```

## KLog

[](https://github.com/ZhaoKaiQiang/KLog)

## 工具

* [UETool](https://github.com/eleme/UETool)
* [uiautomatorviewer](Android自带的工具吧，可以解析ui)

## SDK

* [Ping SDK](https://www.pingxx.com/docs/overview/)
* [Share SDK](http://sharesdk.mob.com/)

## 大项目

* [CloudReader仿网易云音乐](https://jingbin.me/CloudReader/)
    * [github](https://github.com/youlookwhat/CloudReader)
    * [《云阅》一个仿网易云音乐UI，使用Gank.Io及豆瓣Api开发的开源项目](https://www.jianshu.com/p/69a229fb6e1d)
    * [Android 关于WebView全方面的使用(项目应用篇)](https://www.jianshu.com/p/163d39e562f0)
    * [Android - 仿网易云音乐歌单详情页](https://www.jianshu.com/p/1995b7135073)
    * [Android 水波纹效果的探究](https://www.jianshu.com/p/13eb4574e988)