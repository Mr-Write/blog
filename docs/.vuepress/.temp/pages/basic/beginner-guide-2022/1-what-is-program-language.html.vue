<template><div><h1 id="什么是编程语言" tabindex="-1"><a class="header-anchor" href="#什么是编程语言" aria-hidden="true">#</a> 什么是编程语言</h1>
<p>我们通过有固定格式和固定词汇的“语言”来控制他人，让他人为我们做事情。语言有很多种，包括汉语、英语、法语、韩语等，虽然他们的词汇和格式都不一样，但是可以达到同样的目的，我们可以选择任意一种语言去控制他人。</p>
<font color='red'>同样，我们也可以通过”语言“来控制计算机，让计算机为我们做事情，这样的语言就叫做编程语言（Programming Language）。</font><p>编程语言也有固定的格式和词汇，我们必须经过学习才会使用，才能控制计算机。</p>
<p>可以将不同的编程语言比喻成各国语言，为了表达同一个意思，可能使用不同的语句。例如，表达“<code v-pre>我爱你</code>”的意思：</p>
<ul>
<li>汉语：我爱你。</li>
<li>英语：I love you.</li>
<li>日语：あなたのことが好きです</li>
<li>C语言：printf(&quot;我爱你&quot;);</li>
<li>C++语言：<font color='orange'>cout &lt;&lt; &quot;我爱你&quot; &lt;&lt; endl;</font></li>
<li>Java：<font color='orange'>System.out.println(&quot;我爱你&quot;);</font></li>
</ul>
<blockquote>
<p>一条语句的最后要有 <code v-pre>;</code> 。你必须要这样写，这是固定的格式。</p>
</blockquote>
<p>总结：<font color='red'>编程语言是用来控制计算机的一系列指令（Instruction），它有固定的格式和词汇（不同编程语言的格式和词汇不一样），必须遵守，否则就会出错，达不到我们的目的。</font></p>
<p>这些具有特定含义的词汇、语句，按照特定的格式组织在一起，就构成了<code v-pre>源代码（Source Code）</code>，也称<code v-pre>源码</code>或<code v-pre>代码（Code）</code>。</p>
<div class="language-c line-numbers-mode" data-ext="c"><pre v-pre class="language-c"><code><span class="token comment">//这便是源代码</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&lt;stdio.h></span></span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"Hello World"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>那么，C语言肯定规定了源代码中每个词汇、语句的含义，也规定了它们该如何组织在一起，这就是<code v-pre>语法（Syntax）</code>。它与我们学习英语时所说的“语法”类似，都规定了如何将特定的词汇和句子组织成能听懂的语言。</p>
<p>编写源代码的过程就叫做<code v-pre>编程（Program）</code>。从事编程工作的人叫<code v-pre>程序员（Programmer）</code>。程序员也很幽默，喜欢自嘲，经常说自己的工作辛苦，地位低，像农民一样，所以称自己是”码农“，就是写代码的农民。也有人自嘲称是”程序猿“。</p>
</div></template>


