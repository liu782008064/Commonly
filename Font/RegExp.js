var pattern = /(\w+([-+.]\w+)*|)\u4e0a\u6d77\u5949\u8d24\u5efa\u8bbe\u53d1\u5c55\u0028\u96c6\u56e2\u0029\u6709\u9650\u516c\u53f8(\w+([-+.]\w+)*|)13401441-6(\w+([-+.]\w+)*|)/;
//中文字符需要-转换成unicode 在线转换地址http://tool.chinaz.com/tools/unicode.aspx 中文转unicode
//格式 可空任意值+匹配值Ａ＋可空任意值＋匹配值B+可空任意值
//可空任意值=(\w+([-+.]\w+)*|)
//匹配值Ａ=\u4e0a\u6d77\u5949\u8d24\u5efa\u8bbe\u53d1\u5c55\u0028\u96c6\u56e2\u0029\u6709\u9650\u516c\u53f8
//匹配值B=13401441-6
console.log(pattern.test("上海奉贤建设发展(集团)有限公司13401441-6"));
console.log(pattern.test("上海奉贤建设发展(集团)有限公司a13401441-6"));
console.log(pattern.test("上海奉贤建设发展(集团)有限公司a13401441-6a"));
console.log(pattern.test("上海奉贤建设发展(集团)有限公司13401441-6a"));
console.log(pattern.test("a上海奉贤建设发展(集团)有限公司13401441-6"));
console.log(pattern.test("a上海奉贤建设发展(集团)有限公司a13401441-6"));
console.log(pattern.test("a上海奉贤建设发展(集团)有限公司a13401441-6a"));

//格式2 可空任意值+匹配值B＋可空任意值＋匹配值A+可空任意值
var pattern2 = /(\w+([-+.]\w+)*|)13401441-6(\w+([-+.]\w+)*|)\u4e0a\u6d77\u5949\u8d24\u5efa\u8bbe\u53d1\u5c55\u0028\u96c6\u56e2\u0029\u6709\u9650\u516c\u53f8(\w+([-+.]\w+)*|)/;

//两种格式都匹配 pattern|pattern2
