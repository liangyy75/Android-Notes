<style>
img {
    margin: 0 auto;
    display: block;
}
</style>

- [Android App Bundle](#android-app-bundle)
- [Android MultiDex](#android-multidex)
- [Android 声明式UI](#android-%e5%a3%b0%e6%98%8e%e5%bc%8fui)
- [Android debugger](#android-debugger)
- [Android 优化](#android-%e4%bc%98%e5%8c%96)
- [Android i18n](#android-i18n)
- [Android 小知识](#android-%e5%b0%8f%e7%9f%a5%e8%af%86)
- [Android](#android)

### Android App Bundle

### Android MultiDex

### Android 声明式UI

### Android debugger

1. links
    1. [Android Studio 掌握这些调试技巧，Debug能力不能再高啦](https://www.jianshu.com/p/985f788fae2c) finished
    2. [你所不知道的Android Studio调试技巧](https://www.jianshu.com/p/011eb88f4e0d)
    3. [Android Studio Debug调试详解](https://www.jianshu.com/p/9fbf316582e3)

### Android 优化

1. links
    1. [Facebook安卓Feed流的内存优化实践](https://blog.csdn.net/lpjishu/article/details/73478676)

### Android i18n

1. links
    1. [Android获取语言及地区总结](https://blog.csdn.net/dreamsever/article/details/80973300)
2. language
    1. 获取语言和地区
        1. 获取系统语言
            ```java
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.N) { // Android 7.0以后
                LocaleListCompat listCompat=ConfigurationCompat.getLocales(Resources.getSystem().getConfiguration());
                for (int i = 0; i < listCompat.size(); i++) {
                    Log.d("LOCALE_GET", i + " ------1> " + listCompat.get(i).getLanguage() + "-" + listCompat.get(i).getCountry());
                }
            } else { // Android 7.0以前
                Locale locale = Locale.getDefault();
                Log.d("LOCALE_GET", "------------" + locale.getLanguage() + "-" + locale.getCountry());
            }
            ```
        2. 获取当前资源配置的语言
            ```java
            Locale locale；
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.N) {
                locale = getResources().getConfiguration().getLocales().get(0);
            } else {
                locale = getResources().getConfiguration().locale;
            }
            Log.d("LOCALE_GET", "------------" + locale.getLanguage() + "-" + locale.getCountry());
            ```
        3. ``String lang = locale.getLanguage() + “-” + locale.getCountry();``
3. 

### Android 小知识

1. 冷启动和热启动: https://www.jianshu.com/p/1d2e55f1d393

### Android 
