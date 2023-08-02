<template><div><h1 id="c语言的发展史" tabindex="-1"><a class="header-anchor" href="#c语言的发展史" aria-hidden="true">#</a> C语言的发展史</h1>
<p>谈到C语言的发展历程，就不得不从最早的二进制语言说起。大家都知道，<font color='orange'>二进制语言可以说是世界上最早的计算机语言</font>，它只允许程序设计人员使用计算机能够直接识别和执行的二进制代码（即0和1）来编写程序。可想而知，这样的编码方式对程序设计人员来说是多么困难与枯燥。因此，为了提高程序设计效率并减轻程序设计人员的负担，所以后来很快便出现了<strong>汇编语言（Assembly Language）</strong>。</p>
<p>与二进制语言一样，汇编语言也是<code v-pre>面向机器</code>的程序设计语言，不同类型的计算机上需要提供不同的汇编语言。使用汇编语言编写的程序机器并不能直接识别，而需要<font color='orange'>通过一种程序将汇编语言翻译成机器能够识别的二进制语言</font>，这种起<code v-pre>翻译作用</code>的程序就是<code v-pre>汇编程序</code>。</p>
<p>相对于二进制语言，汇编语言不仅使开发效率得到了很大提升，而且它还具有许多优点。尽管如此，汇编语言依旧是一种层次非常低的语言，它仅仅高于直接手工编写二进制的机器指令码。在实际应用中，它仍然暴露了一些不可避免的缺陷。</p>
<p>因此，我们更加需要一种设计描述简单，<font color='orange'>能脱离对机型的要求，并且能在任何计算机上运行的计算机语言</font>，我们称这种语言为<code v-pre>高级语言</code>。这样，程序设计人员就可以将问题及解决问题的算法过程描述出来，利用这种高级语言<font color='orange'>直接写出各种表达式来描述简单的计算过程，而无须针对不同的机型编写不同的代码</font>。</p>
<p>❓ <font color='red'>C语言是世界上出现的第一种高级语言吗</font></p>
<p>不是的，世界上出现的第一种高级语言是<code v-pre>Algol语言</code>，它也可以算作C语言的前身。</p>
<p><img src="https://sangxin-tian.oss-cn-nanjing.aliyuncs.com/image/image-20221013183125605.png" alt="image-20221013183125605" loading="lazy"></p>
<blockquote>
<p>著名的操作系统<code v-pre>UNIX</code>，最早也是由C语言的设计者之一的<code v-pre>Ken Thompson</code>使用<code v-pre>汇编语言</code>所写的，再后来随着C语言的诞生，两位C语言的设计者<code v-pre>Ken Thompson</code>和<code v-pre>Dennis Ritchie</code>又用<code v-pre>C语言</code>重写了<code v-pre>UNIX</code>，C语言也伴随着UNIX操作系统成为一种广受欢迎的计算机语言。</p>
<p>补充：Linux 是一个类似 Unix 的操作系统，Unix 要早于 Linux，Linux 的初衷就是要替代 UNIX，并在功能和用户体验上进行优化，由世界顶级黑客<code v-pre>林纳斯</code>发明的著名操作系统<code v-pre>Linux</code> 是微创新/改进了 UNIX（但并没有抄袭 UNIX 的源码），使得 Linux 在外观和交互上与 UNIX 非常类似。</p>
</blockquote>
<p>对于<font color='red'>任何一门语言，都有不同的版本迭代，存在着新特性、代码结构修改或者新标准制定。</font></p>
<p>美国国家标准委员会<code v-pre>ANSI</code>（American National Standards Institute）是制定C语言标准的国家机构，C语言标准的发展历程如下：</p>
<p><img src="https://sangxin-tian.oss-cn-nanjing.aliyuncs.com/image/image-20221013185225467.png" alt="image-20221013185225467" loading="lazy"></p>
<blockquote>
<p>K&amp;R C：1978年，丹尼斯·里奇(Dennis Ritchie)和布莱恩·科尔尼干(Brian Kernighan)出版了一本书，名叫《The C Programming Language》。这本书被C语言开发者们称为“K&amp;R”，很多年来被当作C语言的非正式的标准说明。人们称这个版本的C语言为“K&amp;R C”。</p>
<p>在GCC编译器中，针对不同版本的C语言标准，可以通过在命令行中使用“-std”选项来选择所需要使用的C语言标准版本。</p>
</blockquote>
</div></template>


