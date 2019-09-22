- [android.R](#androidr)
- [Canvas](#canvas)
- [View properties](#view-properties)
- [View events](#view-events)
- [View AutoFill](#view-autofill)
- [ViewGroup](#viewgroup)
- [TextView](#textview)
- [Button](#button)
- [EditText](#edittext)
- [LinearLayout](#linearlayout)
- [???](#)

## android.R

1. anim
    * accelerate_decelerate_interpolator
    * accelerate_interpolator
    * anticipate_interpolator
    * anticipate_overshoot_interpolator
    * bounce_interpolator
    * cycle_interpolator
    * decelerate_interpolator
    * fade_in
    * fade_out
    * linear_interpolator
    * overshoot_interpolator
    * slide_in_left
    * slide_out_right
2. animator
    * fade_in
    * fade_out
3. transition
    * explode
    * fade
    * move
    * no_transition
    * slide_bottom
    * slide_top
    * slide_left
    * slide_right
4. **array**
    * emailAddressTypes
    * imProtocols
    * organizationTypes
    * phoneTypes
    * postalAddressTypes
5. string
    * VideoView_error_button
    * VideoView_error_text_invalid_progressive_playback
    * VideoView_error_text_unknown
    * VideoView_error_title
    * autofill
    * cancel
    * copy
    * copyUrl
    * cut
    * defaultMsisdnAlphaTag
    * defaultVoiceMailAlphaTag
    * dialog_alert_title
    * emptyPhoneNumber
    * fingerprint_icon_content_description
    * httpErrorBadUrl
    * httpErrorUnsupportedScheme
    * no
    * ok
    * paste
    * paste_as_plain_text
    * search_go
    * selectAll
    * selectTextMode
    * status_bar_notification_info_overflow
    * unknownName
    * untitled
    * yes
6. layout
    * activity_list_item
    * browser_link_context_header
    * expandable_list_content
    * list_content
    * preference_category
    * select_dialog_item
    * select_dialog_multichoice
    * select_dialog_singlechoice
    * simple_dropdown_item_1line
    * simple_expandable_list_item_1
    * simple_expandable_list_item_2
    * simple_gallery_item
    * simple_list_item_1
    * simple_list_item_2
    * simple_list_item_activated_1
    * simple_list_item_activated_2
    * simple_list_item_checked
    * simple_list_item_multiple_choice
    * simple_list_item_single_choice
    * simple_selectable_list_item
    * simple_spinner_dropdown_item
    * simple_spinner_item
    * test_list_item
    * two_line_list_item
7. interpolator
    * accelerate_cubic
    * accelerate_decelerate
    * accelerate_quad
    * accelerate_quint
    * anticipate
    * anticipate_overshoot
    * bounce
    * cycle
    * decelerate_cubic
    * decelerate_quad
    * decelerate_quint
    * fast_out_extra_slow_in
    * fast_out_linear_in
    * fast_out_slow_in
    * linear
    * linear_out_slow_in
    * overshoot
8. integer
    * config_longAnimTime
    * config_mediumAnimTime
    * config_shortAnimTime
    * status_bar_notification_info_maxnum
9. dimen
    * app_icon_size
    * dialog_min_width_major
    * dialog_min_width_minor
    * notification_large_icon_height
    * notification_large_icon_width
    * thumbnail_height
    * thumbnail_width
10. color
    * background_dark
    * background_light
    * black
    * darker_gray
    * holo_blue_bright
    * holo_blue_dark
    * holo_blue_light
    * holo_green_dark
    * holo_green_light
    * holo_orange_dark
    * holo_orange_light
    * holo_purple
    * holo_red_dark
    * holo_red_light
    * primary_text_dark
    * primary_text_dark_nodisable
    * primary_text_light
    * primary_text_light_nodisable
    * secondary_text_dark
    * secondary_text_dark_nodisable
    * secondary_text_light
    * secondary_text_light_nodisable
    * tab_indicator_text
    * tertiary_text_dark
    * tertiary_text_light
    * transparent
    * white
    * widget_edittext_dark
11. **style**
12. **drawable**
13. **attr**

## Canvas

1. 基本
    1. int getWidth()
    2. int getHeight()
    3. int getDensity()
    4. void setDensity(int density)
    5. void setBitmap(Bitmap bitmap)
    6. void setScreenDensity(int density)
    7. int getMaximumBitmapWidth() / int getMaximumBitmapHeight() ==> MAXMIMUM_BITMAP_SIZE = 32766
    8. void enableZ()
    9. void disableZ()
    10. boolean isOpaque()
2. 保存: 
    1. @Saveflags
        1. MATRIX_SAVE_FLAG
        2. CLIP_SAVE_FLAG
        3. HAS_ALPHA_LAYER_SAVE_FLAG
        4. FULL_COLOR_LAYER_SAVE_FLAG
        5. CLIP_TO_LAYER_SAVE_FLAG
        6. ALL_SAVE_FLAG
    2. methods
        1. int save()
        2. int save(@Saveflags int saveFlags)
        3. int saveLayer(@Nullable RectF bounds, @Nullable Paint paint, @Saveflags int saveFlags)
        4. int saveLayer(@Nullable RectF bounds, @Nullable Paint paint)
        5. int saveLayer(float left, float top, float right, float bottom, @Nullable Paint paint, @Saveflags int saveFlags)
        6. int saveLayer(float left, float top, float right, float bottom, @Nullable Paint paint)
        7. int saveLayerAlpha(@Nullable RectF bounds, int alpha, @Saveflags int saveFlags)
        8.  int saveLayerAlpha(@Nullable RectF bounds, int alpha)
        9.  int saveLayerAlpha(float left, float top, float right, float bottom, int alpha, @Saveflags int saveFlags)
        10. int saveLayerAlpha(float left, float top, float right, float bottom, int alpha)
        11. void restore()
        12. int getSaveCount()
        13. void restoreToCount(int saveCount)
3. 

## View properties

1. implements Drawable.Callback, KeyEvent.Callback, AccessibilityEventSource
2. id/size: id / layout_height / layout_width / maxheight / minheight / maxwidth / minwidth / layout_margin / layout_padding / transitionName / stateListAnimator
3. 内容:
    1. foregroundGravity / background / contentDescription / theme / tag / gravity / layout_gravity / saveEnabled(是否保存内容，需要设置id) / visibility
    2. **foreground**(只在Android6版本以上以及FrameLayout本身及其子类才有效，可以设置单击时的前景)
    3. **drawingCacheQuality**(绘制view时需要的质量:auto/high/low)
    4. **duplicateParentState**(是否直接从父容器中获取绘图状态(光标，按下等，但不包括事件))
    5. **fitsSystemWindows**(设置布局调整时是否考虑系统窗口(如状态栏))
    6. **textAlignment** / **textDirection**
4. scroll:
    1. fadingEdgeLength / scrollbars(none/vertical/horizontal) / scrollbarSize / scrollbarStyle / scrollbarThumbVertical / scrollbarTrackVertical / scrollbarAlwaysDrawVerticalTrack
    2. **fadingEdge**(设置滚动时边框渐变的方向:none/horizontal/vertical)
    3. **requiresFadingEdge**(定义滚动时边缘是否褪色)
    4. **fadeScrollbars**(滚动条是否自动隐藏)
    5. **overScrollMode**(滑动到边界时样式)
    6. **verticalScrollbarPosition**(垂直滚动条的位置:left/right/none/defaultPosition)
    7. **scrollbarFadeDuration**
    8. **scrollbarThumbHorizontal**(设置水平滚动条的drawable)
    9. **scrollbarTrackHorizontal**(设置水平滚动条背景(轨迹)的色drawable)
    10. **scrollbarAlwaysDrawHorizontalTrack**(设置水平滚动条是否含有轨道)
5. focus:
    1. focusable / nextFocusUp / nextFocusLeft / nextFocusRight / nextFocusForward(设置指定视图获得下一个焦点，必须是id)
    2. **focusableInTouchMode**(https://blog.csdn.net/u010015108/article/details/52796785 https://www.jianshu.com/p/c90c8e502028)
    3. **nextFocusDown**
    4. **focusedByDefault**
6. touch:
    1. **soundEffectsEnabled**(点击或触摸是否有声音效果)
    2. **hapticFeedbackEnabled**(触力反馈https://blog.csdn.net/love_xsq/article/details/50290485)
    3. **importantForAccessibility**(控制View是否能启用无障碍功能，false是不能启用无障碍功能，为视觉障碍用户提供朗读服务子类的)
    4. **filterTouchesWhenObscured**(https://www.jianshu.com/p/06574d8f10bf 如果该view被一个view覆盖了，则点击上面的view时不会发生点击穿透bug)
7. child:
    1. layout_gravity
    2. **clipChildren**(设置为false后子控件的绘制可以超出父控件的范围)
    3. **clipToPadding**(false后子控件可以在父控件padding内绘制)
8. 属性:
    1. clickable / longClickable / onClick / onLongClick / alpha / rotation / rotationX / rotationY / scaleX / scaleY / scrollX / scrollY / style / transformX / transformY / transformPivotY
    2. **transformPivotX**(相对于一点的水平方向偏转量)
9.  应用:
    1. View淡入淡出设置(ScrollView/ListView等都适用): lvArticle.setVerticalFadingEdgeEnabled(true); lvArticle.setFadingEdgeLength(100);
    2. listview在拖动的时候背景图片消失变成黑色背景。等到拖动完毕我们自己的背景图片才显示出来: android:scrollingCache="false" / android:cacheColorHint="#00000000"
    3. listview的上边和下边有黑色的阴影: android:fadingEdge="none" / android:overScrollMode="never"
    4. lsitview的每一项之间需要设置一个图片做为间隔: android:divider="@drawable/list_driver"
    5. 默认会显示选中的item为橙黄底色，有时候我们需要去掉这种效果: listSelector="@android:color/transparent"
    6. 在项目中，一进入一个页面, EditText默认就会自动获取焦点: 在EditText的父级控件中找一个，设置成android:focusable="true"; android:focusableInTouchMode="true"; 可以截断EditText默认的行为
10. 补充
    1. **outlineAmbientShadowColor** / **outlineSpotShadowColor** / **isScrollContainer** / **accessibilityHeading**
    2. **nextClusterForward** / **layoutDirection** / **layerType** / **keyboardNavigationCluster** / **keepScreenOn** / **hapticFeedbackEnabled**

## View events

1. 创建
    1. 构造函数: 在从代码创建视图时调用构造函数的形式，以及在从布局文件中扩展视图时调用的窗体。第二个表单应该解析并应用布局文件中定义的任何属性。
    2. onFinishInflate(): 在创建视图之后调用，并且其所有子项都已从XML中膨胀。
2. 布局
    1. onMeasure(int, int): 调用以确定此视图及其所有子项的大小要求。
    2. onLayout(boolean, int, int, int, int): 当此视图应为其所有子项指定大小和位置时调用。
    3. onSizeChanged(int, int, int, int): 在此视图的大小发生更改时调用。
3. 画画
    1. onDraw(android.graphics.Canvas): 在视图应呈现其内容时调用。
4. 事件处理
    1. onKeyDown(int, KeyEvent): 在发生新硬件密钥事件时调用。
    2. onKeyUp(int, KeyEvent): 发生硬件加密事件时调用。
    3. onTrackballEvent(MotionEvent): 在轨迹球运动事件发生时调用。
    4. onTouchEvent(MotionEvent): 发生触摸屏运动事件时调用。
5. 焦点
    1. onFocusChanged(boolean, int, android.graphics.Rect): 当视图获得或失去焦点时调用。
    2. onWindowFocusChanged(boolean): 当包含视图的窗口增益或失去焦点时调用。
6. 附上
    1. onAttachedToWindow()
    2. onDetachedFromWindow()
    3. onWindowVisibilityChanged(int)
7. 坐标系 https://blog.csdn.net/u013872857/article/details/53750682
    1. getTop / getLeft / getWidth / getHeight / getRight == getLeft + getWidth / getBottom == getTop + getHeight ，**注意**，这些都是View原始状态时相对于父容器的坐标，对View进行平移操作并不会改变着四个方法的返回值。
    2. getX / getY ，最初时 getX == getLeft && getY == getTop
    3. **getMeasuredWidth** / **getMeasuredHeight**
    4. setPadding(int, int, int, int) / setPaddingRelative(int, int, int, int)
    5. getPaddingLeft / Right, Top, Bottom, Start, End
    6. getTranslationX / getTranslationY ， getTranslationX == getX - getLeft
    7. getLocationInWindow(int[] position) ，获取View相对于Window的坐标(忽略状态栏及ActionBar) / getLocationOnScreen(int[] position) ，获取View相对于整个屏幕的坐标
8. MotionEvent
    1. getX和getY获取到的是相对于当前View左上角的坐标；
    2. getRawX和getRawY获取的是相对于屏幕左上角的坐标。
9. 
10. save
    1. public static boolean sDebugViewAttributes = false;
    2. public static String sDebugViewAttributesApplicationPackage;
    3. public static final int NO_ID = -1;
    4. public static final int LAST_APP_AUTOFILL_ID = Integer.MAX_VALUE / 2;
11. public @interface Focusable: NOT_FOCUSABLE, FOCUSABLE, FOCUSABLE_AUTO
12. public @interface Visibility: VISIBLE, INVISIBLE, GONE
13. public @interface DrawingCacheQuality: DRAWING_CACHE_QUALITY_AUTO, DRAWING_CACHE_QUALITY_LOW, DRAWING_CACHE_QUALITY_HIGH
14. public @interface ScrollBarStyle: SCROLLBARS_INSIDE_OVERLAY, SCROLLBARS_INSIDE_INSET, SCROLLBARS_OUTSIDE_OVERLAY, SCROLLBARS_OUTSIDE_INSET
15. public @interface FocusableMode: FOCUSABLES_ALL, FOCUSABLES_TOUCH_MODE

## View AutoFill

1. links
    1. [Autofill Framework(自动填写) 用法详解](https://juejin.im/entry/594386c55c497d006bd0af56)
    2. [android 8.0 Autofill Framework (自动填充框架)](https://juejin.im/post/5b23ba7f518825748c1c6729)
2. android:autofillHints / view.setAutofillHints(String… autofillHints)
    1. AUTOFILL_HINT_CREDIT_CARD_EXPIRATION_DATE 信用卡到期日期
    2. AUTOFILL_HINT_CREDIT_CARD_EXPIRATION_DAY 信用卡到期日
    3. AUTOFILL_HINT_CREDIT_CARD_EXPIRATION_MONTH 信用卡到期月
    4. AUTOFILL_HINT_CREDIT_CARD_EXPIRATION_YEAR 信用卡到期年
    5. AUTOFILL_HINT_CREDIT_CARD_NUMBER 信用卡卡号
    6. AUTOFILL_HINT_CREDIT_CARD_SECURITY_CODE 信用卡安全密码
    7. AUTOFILL_HINT_EMAIL_ADDRESS 邮箱地址
    8. AUTOFILL_HINT_NAME 用户真名
    9. AUTOFILL_HINT_PASSWORD 用户密码
    10. AUTOFILL_HINT_PHONE 电话号码
    11. AUTOFILL_HINT_POSTAL_ADDRESS 邮寄地址
    12. AUTOFILL_HINT_POSTAL_CODE 邮寄编号
    13. AUTOFILL_HINT_USERNAME 用户名
3. public @interface AutofillType: AUTOFILL_TYPE_NONE / AUTOFILL_TYPE_TEXT / AUTOFILL_TYPE_TOGGLE / AUTOFILL_TYPE_LIST / AUTOFILL_TYPE_DATE
4. android:importantForAutofill / view.setImportantForAutofill(int mode): 这个属性可以让系统识别该控件是否支持自动填充服务
    1. IMPORTANT_FOR_AUTOFILL_AUTO 系统决定是否触发自动填充服务
    2. IMPORTANT_FOR_AUTOFILL_NO 不使用autofill,但是子view可以使用
    3. IMPORTANT_FOR_AUTOFILL_NO_EXCLUDE_DESCENDANTS 不使用autofill,子view也不使用
    4. IMPORTANT_FOR_AUTOFILL_YES 使用autofill,包括子view
    5. IMPORTANT_FOR_AUTOFILL_YES_EXCLUDE_DESCENDANTS 使用autofill,但子view不使用
5. public @interface AutofillFlags: AUTOFILL_FLAG_INCLUDE_NOT_IMPORTANT_VIEWS
6. 页面准备
    ```xml
    <LinearLayout ...>
        <android.support.design.widget.TextInputLayout ...>
            <EditText android:id="@+id/username" android:importantForAutofill="yes" android:inputType="textEmailAddress" ...>
        <android.support.design.widget.TextInputLayout ...>
            <EditText android:id="@+id/password" android:importantForAutofill="yes" android:inputType="numberPassword" ...>
        <Button android:id="@+id/save_button" android:onClick="userLogin" ...>
    ```
7. 数据准备
    ```java
    public class MainActivity extends AppCompactActivity {
        @Override protected void onCreate(Bundle savedInstanceState) {
            super.onCreate(savedInstanceState);
            setContentView(R.layout.activity_main);
            mAutofillManager = this.getSystemService(AutofillManager.class);
            mAutofillCallback = new MyAutofillCallback();
        }
        public void userLogin(View view) {
            String uName = ((EditText) findViewById(R.id.username)).getText().toString();
            String pw = ((EditText) findViewById(R.id.password)).getText().toString();
            SharedPreferences.Editor editor = getSharedPreferences("EMAIL_STORAGE", MODE_PRIVATE).edit();
            editor.putString("PRIMARY_EMAIL", uName);
            editor.putString("USER_PW", pw);
            editor.commit();
        }
    }
    ```
8. AutofillService
    1. onSaveRequest(SaveRequest request, SaveCallback callback): 保存需要自动填入记录。
        ```java
        List<FillContext> context = request.getFillContexts();
        // 保存步骤：
        // 1.得到最近一条需要填写的表单（表单的所有内容）
        AssistStructure structure = context.get(context.size() - 1).getStructure();
        // 2.解析记录的数据AssistStructure
        // 3.通过SharedPreferences,数据库，文件等存储方式保存下来
        ```
    2. onFillRequest(FillRequest request, CancellationSignal cancellationSignal, FillCallback callback): 执行自动填入记录。
        ```java
        // 自动填写步骤：
        // 1.得到最近一条需要填写的表单（表单的所有内容）
        AssistStructure structure = request.getFillContexts().get(request.getFillContexts().size() - 1).getStructure();
        // 2.获取保存的自动填写的表单的结果集Dataset放在FillResponse上
        // 3.通过FillCallback把FillResponse的内容展示到界面交互
        ```
    3. 在manifest中，声明AutofillService
        ```xml
        <service
            android:name=".multidatasetservice.MyAutofillService"
            android:permission="android.permission.BIND_AUTOFILL"
            android:label="Multi-Dataset Autofill Service">  <!-- autofill的名字，随意设定，最终会显示在系统设置的autofill service上 -->
            <meta-data
                android:name="android.autofill"
                android:resource="@xml/multidataset_service" />
            <intent-filter>
                <action android:name="android.service.autofill.AutofillService" />
            </intent-filter>
        </service>
        ```
9. MyAutofillService
    ```java
    public class MyAutofillService extends AutofillService {
        public void traverseStructure(AssistStructure structure, List<AssistStructure.ViewNode> emailFields) {
            int nodes = structure.getWindowNodeCount();
            for (int i = 0; i < nodes; i++) {
                AssistStructure.WindowNode windowNode = structure.getWindowNodeAt(i);
                AssistStructure.ViewNode viewNode = windowNode.getRootViewNode();
                traverseNode(viewNode, emailFields);
            }
        }
        public void traverseNode(AssistStructure.ViewNode viewNode, List<AssistStructure.ViewNode> emailFields) {
            if (viewNode == null || viewNode.getClassName() == null) return;
            if (viewNode.getClassName().contains("EditText")) {
                String viewId = viewNode.getIdEntry();
                if (viewId != null && (viewId.contains("email") || viewId.contains("username") || viewId.contains("password"))) {
                    emailFields.add(viewNode);
                    return;
                }
            }
            for (int i = 0; i < viewNode.getChildCount(); i++) {
                AssistStructure.ViewNode childNode = viewNode.getChildAt(i);
                traverseNode(childNode, emailFields);
            }
        }

        @Override
        public void onFillRequest(@NonNull FillRequest request, @NonNull CancellationSignal cancellationSignal, @NonNull FillCallback fillCallback) {
            List<FillContext> context = request.getFillContexts();
            AssistStructure structure = context.get(context.size() - 1).getStructure();
            List<AssistStructure.ViewNode> emailFields = new ArrayList<>();
            traverseStructure(structure, emailFields);
            if (emailFields.size() < 2) {
                fillCallback.onSuccess(null);
                return;
            }
            SharedPreferences sharedPreferences = getSharedPreferences("EMAIL_STORAGE", MODE_PRIVATE);
            String primaryEmail = sharedPreferences.getString("PRIMARY_EMAIL", "");
            String secondaryEmail = sharedPreferences.getString("SECONDARY_EMAIL", "");

            // 创建自动提示的view
            RemoteViews rvPrimaryEmail = new RemoteViews(getPackageName(), R.layout.user_suggestion);
            rvPrimaryEmail.setTextViewText(R.id.email_suggestion_item, primaryEmail);
            rvPrimaryEmail.setImageViewResource(R.id.icon, R.mipmap.user);
            RemoteViews rvSecondaryEmail = new RemoteViews(getPackageName(), R.layout.user_suggestion);
            rvSecondaryEmail.setTextViewText(R.id.user_suggestion_item, primaryEmail);
            rvSecondaryEmail.setImageViewResource(R.id.icon, R.mipmap.pw);

            AssistStructure.ViewNode userField = emailFields.get(0);
            AssistStructure.ViewNode passField = emailFields.get(1);
            // 为自动填充视图构造数据
            Dataset primaryEmailDataSet = new Dataset.Builder(rvPrimaryEmail)
                    .setValue(userField.getAutofillId(), AutofillValue.forText(primaryEmail)).build();
            Dataset secondaryEmailDataSet = new Dataset.Builder(rvSecondaryEmail)
                    .setValue(passField.getAutofillId(), AutofillValue.forText(secondaryEmail)).build();

            // 封装响应数据
            FillResponse response = new FillResponse.Builder()
                    .addDataset(primaryEmailDataSet)
                    .addDataset(secondaryEmailDataSet)
                    // .addDataset(msecondaryEmailDataSet)
                    // .setSaveInfo(new SaveInfo.Builder(  // 只有添加SaveInfo对象才会回调onSaveRequest
                    //         SaveInfo.SAVE_DATA_TYPE_USERNAME | SaveInfo.SAVE_DATA_TYPE_EMAIL_ADDRESS,
                    //         new AutofillId[]{ emailField.getAutofillId(), emailField.getAutofillId() }).build())
                    .build();
            // 通知自动填充框架
            fillCallback.onSuccess(response);
        }

        // 保存需要自动填入记录。
        @Override
        public void onSaveRequest(@NonNull SaveRequest request, @NonNull SaveCallback callback) {
            List<FillContext> context = request.getFillContexts();
            AssistStructure structure = context.get(context.size() - 1).getStructure();
            List<AssistStructure.ViewNode> emailFields = new ArrayList<>();
            traverseStructure(structure, emailFields);
            callback.onSuccess();
        }
    }
    ```
10. 

## ViewGroup



## TextView

1. extends View implements ViewTreeObserver.OnPreDrawListener [Android 9.0关于字体的新特性](https://blog.csdn.net/u013894711/article/details/81532638)
2. drawable: drawableBottom / drawableTop / drawableStart / drawableEnd / drawableRight / drawableLeft / drawablePadding
3. style:
    1. **textAllCaps**(自动将字符变为大写，但是Spannable就会失效???)
    2. **bufferType**(normal/spannable/editable 指定getText()方式取得的文本类别，其中editable可通过获取文本为textview追加内容???)
    3. **capitalize**(设置英文字母大写类型。此处无效果，需要弹出输入法才能看得到)
    4. **cursorVisible**(光标是否显示)
4. font:
    1. fontFamily
5. text1:
    1. editable | enable | lastBaselineToBottomHeight | inputType | marqueenRepeatLimit | maxEms | minEms | maxLength
    2. **digits**(设置允许输入哪些字符，如"1234567890.+-*/% ()")
    3. **editorExtras**(设置文本的额外的输入数据)
    4. **ellipsize**(start(省略号位置)/end/middle/marquee(跑马灯) 当文字过长时,该控件该如何显示)
    5. **ems**(将对应的控件宽度设为指定个数字符的宽度)
    6. **firstBaselineToTopHeight**(https://blog.csdn.net/u013894711/article/details/81532638 TextView上边界和第一条baseline间的距离，该属性可替代top padding)
    7. **inputMethod**(为文本指定输入法，需要完全限定名(完整的包名))
    8. **scrollHorizontally**(文本超出TextView的宽度的情况下，是否出现横拉条)
6. text2:
    1. hint | text | textColor | textColorHint | textColorLink | textSize | textStyle | textCursorDrawable | textIsSelectable | textScaleX
    2. **freezesText**(设置保存文本的内容以及光标的位置)
    3. **numeric**(如果被设置，该TextView有一个数字输入法。此处无用，设置后唯一效果是TextView有点击效果)
    4. **password**(以小点"."显示文本)
    5. **phoneNumber**(设置为电话号码的输入方式)
    6. **selectAllOnFocus**(如果文本是可选择的，让他获取焦点而不是将光标移动为文本的开始位置或者末尾位置。 TextView中设置后无效果)
    7. **textColorHighlight**(被选中文字的底色，默认为蓝色)
    8. **typeface**(设置文本字体)
7. ime(软键盘):
    1. **imeActionId**(设置要获取的软键盘的view的id)
    2. **imeActionLabel**(设置获取的id的值)
    3. **imeOptions**(actionGo/actionSend/actionSearch/actionDone/normal/actionUnspecified/actionPrevious/actionNext/actionNone/... https://blog.csdn.net/lastdream/article/details/24365633)
    4. **privatedImeOptions**(设置输入法选项，此处无用，在EditText将进一步讨论)
8. line:
    1. lineHight(API 28) | maxLines | minLines | singleLine
    2. **lineSpacingExtra**(行间距，而且是不包括字体大小等等的，是添加的间距，5.0后对最后一行无效)
    3. **lineSpacingMultiplier**(将行间距设定为行高的倍数，5.0后对最后一行无效 https://blog.csdn.net/etwge/article/details/72818859)
    4. **lines**(设置文本的行数，设置两行就显示两行，即使第二行没有数据)
9. auto:
    1. autoSizeMinTextSize | linksClickable
    2. **autoText**(如果设置，将自动执行输入值的拼写纠正。此处无效果，在显示输入法并输入的时候起作用)
    3. **autoLink**(none/web/email/phone/map/all https://www.jianshu.com/p/d3bef8449960)
    4. **autoSizeMaxTextSize**(自动设置字体大小时最大的字体大小，需要配合autoSizeStepGranularity与autoSizeTextType)
    5. **autoSizePresetSizes**(@array/autosize_text_sizes，配合autoSizeTextType使用)
    6. **autoSizeStepGranularity**(字体大小变化的粒度)
    7. **autoSizeTextType**(none/uniform(字体大小自适应width与height，如果没有其他属性会占据整个width与height))
10. shadow:
    1. shadowColor(需要与shadowRadius一起使用) | shadowDy
    2. **shadowDx**(设置阴影横向坐标开始位置)
    3. **shadowRadius**(设置阴影的半径。设置为0.1就变成字体的颜色了，一般设置为3.0的效果比较好)

## Button



## EditText



## LinearLayout

## ???

1. links
    1. [七大主流抗锯齿浅析](https://blog.csdn.net/u013467442/article/details/40628121)
