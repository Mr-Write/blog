<template><div><h1 id="编程学习的心得分享" tabindex="-1"><a class="header-anchor" href="#编程学习的心得分享" aria-hidden="true">#</a> 编程学习的心得分享</h1>
<h2 id="_1-学会做笔记-有自己的笔记库" tabindex="-1"><a class="header-anchor" href="#_1-学会做笔记-有自己的笔记库" aria-hidden="true">#</a> 1.学会做笔记，有自己的笔记库</h2>
<p>你一定要学会做自己的笔记，无论你是用本子做笔记还是用电脑软件做笔记，都要有对知识点的总结，有在学习过程中或 编程/开发 练习中遇到的问题的思考。</p>
<p>随着时间的迁移，你的知识范围与知识深度都会大大提高，人的大脑能装的东西是有限的，你肯定会忘记许多曾经学过的知识。有人说我看书不就行了吗，书上讲的多详细与知识覆盖多广啊？但实际上，你所需要花的查阅成本比看笔记大的多，笔记上应当有你自己对于知识点的理解，有对需要注意的问题的标注。</p>
<p>当然，我更加推荐的是用电脑软件做笔记。在我的整个大一期间，我都是像高中一样使用本子做笔记，但得出来的结论是不仅花费在做笔记上的时间上太多，而且查询某个知识的效率也低下。</p>
<p>过去的日子里我陆陆续续用了许多支持 markdown 语法的程序员笔记软件，但兜兜转转还是回到了 Typora，我确实认为它是最好的程序员笔记工具，你值得去学习一下如何使用。</p>
<h2 id="_2-代码不要死记硬背-关键在于理解是干嘛的" tabindex="-1"><a class="header-anchor" href="#_2-代码不要死记硬背-关键在于理解是干嘛的" aria-hidden="true">#</a> 2.代码不要死记硬背，关键在于理解是干嘛的</h2>
<p>这里说的代码不要死记硬背，不是说的不要去记忆一些东西，当然还是有东西需要去记住的。比如说我们 C 语言的 int、double、float、for、while、case、switch、break 等等关键字还有 C 语言的语法等，这些肯定都是需要记的。就像学习英语你不知道单词，不知道语法能学好英语吗？我们的代码就相当于英语语句，记住了英语单词、词组、语法等那么写出英语语句就不会是件特别难的事情了。我们的代码也是如此，掌握了关键字、语法等写出代码也会很轻松。</p>
<p>那哪些东西不要去记呢？举个例子，无论是 C 语言，还是 Java，还是数据库 SQL 语言等等，都有成百上千往上走的函数/类，这些其实除了一些常用的，其它的我们都不需要去记，你只需要知道在某个语言中应该有某个功能的函数就够了，那我们要用的时候怎么找这个函数呢？其实很简单，到 CSDN、博客园、稀土掘金 等程序员社区去找就行了。</p>
<blockquote>
<p>📑 比如说我想在 C 语言中生成随机数，但是忘记代码是怎么写来着，直接搜索“<strong>C语言生成随机数</strong>”之类的关键词到程序员社区找就行了，肯定是有的，都是前人的经验。</p>
</blockquote>
<p>我以 C 语言为例，带大家来浅浅探讨一段令无数程序员肾上腺素飙升的代码：</p>
<div class="language-c line-numbers-mode" data-ext="c"><pre v-pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;stdio.h></span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"Hello World"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>#</code> 是<strong>预处理命令</strong>，这里可以简单理解为就是<strong>标识在源程序编译前进行预先的处理工作</strong>。</p>
<p>那处理什么呢？我们接着往后看，后接单词 <code v-pre>include</code>，即包含，包含这个词和导入差不多，在编程世界里导入一词更为专业，因此我们之后讲解是我用 <strong>导入</strong> 来代替包含。</p>
<blockquote>
<p>先提一个概念：C 语言开发者们编写了很多常用函数，并分门别类的放在了不同的文件，这些文件就称为头文件（header file），以 <code v-pre>.h</code> 作为后缀名。<font color='red'>头文件也是文本文件</font>。</p>
</blockquote>
<p>因此你应当能理解，<code v-pre>stdio.h</code> 就是一个 <font color='red'>文件名为 stdio 的头文件</font>，在 stdio 文件中，包含了许多封装好了的函数供我们程序员使用。</p>
<p>stdio 具体又是个怎样的文件呢？stdio实际是一个缩写，我们把stdio进行一个拆分：</p>
<ul>
<li><code v-pre>std</code>：standard 的缩写，翻译成中文为“标准”；</li>
<li><code v-pre>i</code>：input 的缩写，翻译成中文为“输入”；</li>
<li><code v-pre>o</code>：output 的缩写，翻译成中文为“输出”。</li>
</ul>
<p>因此 stdio 文件，即是 <strong>标准输入输出文件</strong>。</p>
<p>总结 <font color='red'>#include&lt;stdio.h&gt;：在源程序编译前导入标准输入输出（流）文件到我们自己的程序（程序也是文件形式）中。</font></p>
<p>每个头文件中都包含了若干个功能类似的函数，调用某个函数时，要引入对应的头文件，否则编译器找不到函数。你需要知道的是 <strong>标准输入输出文件</strong> 中有两个特别重要的函数：</p>
<ol>
<li><code v-pre>printf</code>：输出函数，作用是将内容输出到控制台面板上；</li>
<li><code v-pre>scanf</code>：输入函数，作用是通过键盘输入内容到正在允许的程序中。</li>
</ol>
<p>所以，说到这里，你应当大概能理解我们为什么要我们需要写 <code v-pre>#include&lt;stdio.h&gt;</code> 了吧，因为 <code v-pre>printf</code> 和 <code v-pre>scanf</code> 函数来自于 <code v-pre>stdio</code> 文件，我们想在自己的代码文件中使用到这两个函数，就不得不在源程序编译前进行预先处理 - 导入 stdio 文件，这样在编译完源程序进行程序运行时才是以合法形式使用printf 和 scanf。</p>
<blockquote>
<p>暂时你只需要知道 stdio 文件有这两个函数，实际上该文件中还有许多其它常用函数，这里不做列举。</p>
</blockquote>
<p>📝 根据我们上述分析，如果我们没有使用到 stdio 文件中的函数，是不是就不需要写 <code v-pre>#include&lt;stdio.h&gt;</code> 呢？答案是 <font color='red'>不需要写的</font>，我们举个例子：</p>
<div class="language-c line-numbers-mode" data-ext="c"><pre v-pre class="language-c"><code><span class="token comment">// 这个程序中就没有使用来自stdio文件的函数如 printf</span>
<span class="token comment">// 因此当我们编译运行时虽然没有在文件行首声明 #include&lt;stdio.h>，也是能够执行成功这个程序的</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> temp<span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>学会深度思考，这样即使你突然忘记了某个代码片段的编写，但回顾时是很容易轻松与上手的。</p>
<p>即使是工作了几十年的程序员，也会对于某些功能模块的代码拿不准记不清，也依旧会去网上搜索，把网上现成的代码复制下来加以修改就可以放到自己的项目中。为什么他们能很快速的知道某段代码是干嘛的，知道某段代码该如何修改呢？原因很简单，<font color='red'>一方面是已经有了大量的实践经验，一方面是对这段代码所应该起到的作用，实现某个功能的代码逻辑理解很深刻。</font></p>
<p>💭 说说我刚接触编程的经历：大概是在 2021 年放完国庆假后（刚结束大学军训），我开始学习 C 语言，看学校发的谭浩强爷爷的《C语言程序设计》，书的前几页的代码我先是像高中一样背诵了几天，然后开始默写代码。关于深层次的代码解释基本不懂，因为书上虽然有解释但我完全没有沉下心来去尝试理解。就这样懵懵懂懂过了一个月，自己对编程完全提不起兴趣，看书就想困，还和玩的好的高中朋友们抱怨自己不适合编程，看不明白一点。我把这段经历当作给大家的反面教材， 这种做法是真的蠢。</p>
<h2 id="_3-养成良好的编程习惯" tabindex="-1"><a class="header-anchor" href="#_3-养成良好的编程习惯" aria-hidden="true">#</a> 3.养成良好的编程习惯</h2>
<p>当代码量足够庞大时，代码的可读性就显得尤为重要。这里的可读，不仅仅是对自己可读，也要对其他人可读。一段只有自己能读懂的代码，可以说价值很低，而且这样的代码随着时间的推移往往自己也读不懂。而可读性强的代码，不仅方便移植与交流，更给调试带来了难以估量的便利。对于一个团队来讲，制定统一的编程规范，好处是显而易见的。通常一个项目是由多个成员共同完成，在项目中，经常互相调用组内成员的代码。如果两个人的编程习惯和风格差异显著，那么将会浪费大量时间在读懂代码上。相反，一致而良好的编程规范，会让合作开发变得轻松而高效。</p>
<p>这里介绍几个我觉得比较重要的编程习惯：</p>
<h3 id="🍀-一定要格式化代码" tabindex="-1"><a class="header-anchor" href="#🍀-一定要格式化代码" aria-hidden="true">#</a> 🍀 一定要格式化代码</h3>
<p>代码格式化，主要是整理<strong>原代码的缩进</strong>，以及<strong>运算符的间隔</strong>（比如通常在运算符左右都有空格）等。目的是使代码缩进清晰，更容易阅读。</p>
<p>❌ <font color='red'>未格式化的代码</font></p>
<div class="language-c line-numbers-mode" data-ext="c"><pre v-pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;stdio.h></span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token keyword">int</span> a<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> <span class="token keyword">if</span><span class="token punctuation">(</span>a<span class="token operator">==</span><span class="token number">1</span><span class="token punctuation">)</span>
		<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"a的值为："</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"%d"</span><span class="token punctuation">,</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>比如这样的代码，你觉得可读性好吗？特别是在实际开发中代码量远比这个多得多，如果程序有 bug 需要排查，这对修改代码的人无非是一种巨大的痛苦。</p>
<p>✅ <font color='green'>格式化的代码</font></p>
<div class="language-c line-numbers-mode" data-ext="c"><pre v-pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;stdio.h></span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>a <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"a的值为："</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"%d"</span><span class="token punctuation">,</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="🍀-标识符规范命名" tabindex="-1"><a class="header-anchor" href="#🍀-标识符规范命名" aria-hidden="true">#</a> 🍀 标识符规范命名</h3>
<p>标识符概念：</p>
<ol>
<li>对各种变量、函数、文件等命名时使用的字符序列称为<strong>标识符</strong>；</li>
<li>
<font color='red'>凡是可以自己取名字的地方都叫标识符。</font></li>
</ol>
<p>这里以 <strong>变量</strong> 的规范命名为例：</p>
<ol>
<li>命名应当直观且可以拼读，可望文知意，便于记忆和阅读。<font color='red'>最好采用英文单词或其组合，不允许使用拼音。</font>程序中的英文单词一般不要太复杂，用词应当准确；</li>
<li>命名的长度应当符合用最少单词表达出最详细的信息原则。C 是一种简洁的语言，命名也应该是简洁的。例如变量名 MaxVal 就比MaxValueUntilOverflow 好用。标识符的长度一般不要过长；</li>
<li>英文词尽量不缩写，特别是非常用专业名词，如果有缩写，在同一系统中对同一单词必须使用相同的表示法，并且注明其意思；</li>
<li>当标识符由多个词组成时，每个词的第一个字母大写，其余全部小写。比如 StudentAge、StudentFatherName；</li>
<li>尽量避免变量名中出现数字编号，如 Value1，Value2 等，除非逻辑上的确需要编号。初学者总是喜欢用带数字的变量名或函数名，这样子看上去很简单方便，但其实是一颗颗定时炸弹。这个习惯初学者一定要改过来。</li>
</ol>
<h3 id="🍀-学会写注释" tabindex="-1"><a class="header-anchor" href="#🍀-学会写注释" aria-hidden="true">#</a> 🍀 学会写注释</h3>
<p>什么是注释：<font color='green'>用于说明解释程序代码的文字就是注解。</font>被注释的文字，不会被编译器编译执行，注释就是给自己或其它程序员看的。</p>
<p>注解提高了代码的阅读性。<font color='red'>会写注释 是 一个程序员必须要具有的良好的编程习惯。</font>将自己的思维先通过注释整理出来，再用代码去体现。</p>
<p>试想一下，在项目开发中，如果遇到 BUG，你或其它程序员需要对你的代码进行修改，可能随着时间推移你也早就忘了某段代码到底是干嘛的了，如果你写了注释，程序员能够快速把握你的代码编写思路，极大提高开发效率。<font color='red'>写一手好的代码也是一个高级程序员必备的技能之一。</font></p>
<p>📑 我举一个我在项目中写过的注释：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token comment">// 1.校验用户手机号格式</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">RegexUtils</span><span class="token punctuation">.</span><span class="token function">isPhoneInvalid</span><span class="token punctuation">(</span>phone<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token class-name">Result</span><span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token class-name">HttpStatus</span><span class="token punctuation">.</span><span class="token constant">HTTP_BAD_REQUEST</span><span class="token punctuation">.</span><span class="token function">getCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">"手机号格式错误"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token class-name">String</span> key <span class="token operator">=</span> <span class="token class-name">RedisConstants</span><span class="token punctuation">.</span><span class="token constant">LOGIN_USER_CODE_KEY</span> <span class="token operator">+</span> phone<span class="token punctuation">;</span>

<span class="token comment">// 2.查看缓存中是否已经存在，得到剩余TTL</span>
<span class="token class-name">Long</span> expire <span class="token operator">=</span> redisCacheUtils<span class="token punctuation">.</span><span class="token function">getExpire</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 3.存在并且剩余时长大于4分钟则不可再次发送验证码</span>
<span class="token keyword">if</span><span class="token punctuation">(</span>expire <span class="token operator">></span> <span class="token class-name">RedisConstants</span><span class="token punctuation">.</span><span class="token constant">LOGIN_USER_CODE_AGAIN_TTL</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token class-name">Result</span><span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token class-name">HttpStatus</span><span class="token punctuation">.</span><span class="token constant">HTTP_TRY_AGAIN_LATER</span><span class="token punctuation">.</span><span class="token function">getCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token string">"发送失败，验证码仍在有效期内"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 4.验证码不存在或者剩余时长小于四分钟，则可以继续发送验证码 --> 先生成六位随机数</span>
<span class="token class-name">String</span> code <span class="token operator">=</span> <span class="token class-name">RandomUtil</span><span class="token punctuation">.</span><span class="token function">randomNumbers</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 关于恶意并发的问题，在短信云平台已经自动做了处理，这里就无需处理</span>

<span class="token comment">// 5.先存储到 redis，附带验证次数，初始化为0</span>
redisCacheUtils<span class="token punctuation">.</span><span class="token function">setCacheObject</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span>code<span class="token operator">+</span><span class="token string">",0"</span><span class="token punctuation">,</span><span class="token class-name">RedisConstants</span><span class="token punctuation">.</span><span class="token constant">LOGIN_USER_CODE_TTL</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 6.发送短信到手机</span>
<span class="token keyword">boolean</span> result <span class="token operator">=</span> aliSmsTemplateUtils<span class="token punctuation">.</span><span class="token function">sendLoginCode</span><span class="token punctuation">(</span>phone<span class="token punctuation">,</span>code<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//boolean result = txSmsTemplateUtils.sendLoginCode(phone, code);</span>
<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>result<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// 6.1 发送失败，则移除 redis 中的验证码缓存信息，并返回</span>
    redisCacheUtils<span class="token punctuation">.</span><span class="token function">deleteObject</span><span class="token punctuation">(</span>key <span class="token operator">+</span> phone<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token class-name">Result</span><span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token class-name">HttpStatus</span><span class="token punctuation">.</span><span class="token constant">HTTP_INTERNAL_ERROR</span><span class="token punctuation">.</span><span class="token function">getCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token class-name">HttpStatus</span><span class="token punctuation">.</span><span class="token constant">HTTP_INTERNAL_ERROR</span><span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 6.2 发送成功</span>
<span class="token keyword">return</span> <span class="token class-name">Result</span><span class="token punctuation">.</span><span class="token function">ok</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当然，你也可能会看到一些有趣的注释：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 老板要求在这里让非 VIP 的用户卡顿一下，这样用户才有充值 VIP 的欲望，说白了，得加钱使用才不卡。</span>
<span class="token comment">// 如果已经是 VIP 的用户，那么就该 if 语句不成立，就不会卡顿，业务继续执行</span>
<span class="token keyword">if</span><span class="token punctuation">(</span>user<span class="token punctuation">.</span>isVip <span class="token operator">==</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	Thread<span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">10000</span><span class="token punctuation">)</span> <span class="token comment">// 单位是 ms，这里卡顿 10 s</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-程序是用大脑写的-而不是用手写。" tabindex="-1"><a class="header-anchor" href="#_4-程序是用大脑写的-而不是用手写。" aria-hidden="true">#</a> 4.程序是用大脑写的，而不是用手写。</h2>
<p>简单的说：做事之前，要先过遍脑子。</p>
<p>用大脑写代码的意思就是程序应该是在脑袋里成型的。首先，即便是上边那些混乱的写法，也肯定要过大脑的，毕竟不经过大脑，你其实很难下意识打出一行代码的，但问题就是经过大脑的部分实在太少了，每次就那么几行上下文。真正高级的做法是，你能够在脑袋里把整套代码的流程推导一遍，让程序在你的大脑里运行一遍，这时候你会发现写下来会是非常轻松的体力活。有那么一些程序员几乎不加班，但是效率还是很高，那就是因为他们其实无时无刻都能在大脑里写程序。成为一个高级程序最重要的就是要有在大脑里完整的写完一段代码的能力。</p>
<p>如果接受了大脑写代码的说法，那么你会得到一个非常有意思的结论：<font color='red'>用的哪种编程语言并不重要，重要的是思想。</font></p>
<h2 id="_5-一定要亲自写代码-能听懂与会使用是两码事" tabindex="-1"><a class="header-anchor" href="#_5-一定要亲自写代码-能听懂与会使用是两码事" aria-hidden="true">#</a> 5.一定要亲自写代码，能听懂与会使用是两码事</h2>
<blockquote>
<p>纸上得来终觉浅，绝知此事要躬行。</p>
</blockquote>
<p>很多学习编程的人在学会某个知识点或者听懂某个算法后就说自己懂了，却没有去上机实验是非常不可取的。有的东西思想其实很简单，但用代码实现起来可能会让你无所适从，可你却没有去实操就不知道有这些问题，这是非常致命的。代码是敲出来的，不要眼高手低。简单的不屑于敲，难的又敲不出来，是一件很尴尬的事情。</p>
<p>代码是一切的基石，看看我们软件界的先辈们吧。<code v-pre>Dennis M. Ritchie</code> 决定创造一门“看上去很好”的语言时，如果只是站在高处呐喊，这门语言是划时代的，它有多么优秀，但不去实现，又有何用呢？没有 <code v-pre>Dennis M. Ritchie</code> 的亲自编码实现，C 语言不可能诞生，UNIX 操作系统也不可能诞生。Linux 在聚拢成千上万的开源狂热者对它进行开发和扩展之前，如果没有 <code v-pre>Linus Torvalds</code> 的编码实现，仅凭他高声呐喊“我要创造一个划时代的操作系统”，有用吗？一切的一切都是以编码实现为前提的，代码是我们前进的基石。这是一个英雄辈出的年代，我们每个人都希望自己被顶礼膜拜，可是这需要资本和实力，而我们的实力体现了我们处理技术问题的能力。</p>
<p>无论你将来的职业发展方向是架构师、设计师、分析师、管理者，还是其他职位，只要还与软件打交道，就有必要打好能亲手写出一手好代码的技术基础。</p>
<font color='red'>一个程序员，如果没有亲手写过几万行代码，没有做过几个好的项目，不能说是一个合格的程序员。</font><h2 id="_6-有目的地去学习" tabindex="-1"><a class="header-anchor" href="#_6-有目的地去学习" aria-hidden="true">#</a> 6.有目的地去学习</h2>
<font color='red'>一定一定不要跟着学校课程的安排进度来学习，在大学你拥有足够的自由空间去做你想做的事情。</font><p>如果你对充满创意和视觉效果的网页设计感兴趣，那么你应该深入了解前端开发的相关知识。前端技术涉及网页的外观、交互和用户体验，让你能够创造出花里胡哨而又令人印象深刻的网页；</p>
<p>如果你对未来从事游戏开发充满期待，那么你应该深入学习 C/C++ 基础，为自己打下坚实的编程基础。接着，你可以探索适用于游戏开发的 C# 语言，将 unity 作为游戏引擎，并深入研究游戏设计原理；</p>
<p>如果你想在大四实习的时候进大厂，那么大二大三请开始去了解大厂对实习生的要求，比如需要 Linux 基础，那就把需要有一台 Linux 服务器，把使用命令模式当成一种习惯；</p>
<p>如果你希望工作 5 年后成为一名架构师，请去了解架构师需要的基本技能，在平时工作时尝试着不同服务架构的搭建；</p>
<p>如果你希望以后可以自己出去创业，那在你具备一定技能时，就多出去走走与人交流，去了解一个完整的项目需要有哪些环节，需要与哪些人员沟通，出了问题需要准备哪些预案。</p>
</div></template>


