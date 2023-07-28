<template><div><h1 id="_1-深色模式" tabindex="-1"><a class="header-anchor" href="#_1-深色模式" aria-hidden="true">#</a> 1.深色模式</h1>
<p>在深色模式下，页面会使用深色背景与浅色文字，以让你更加舒适。</p>
<p>你可以在主题选项中通过 <code v-pre>darkmode</code> 来配置深色模式。</p>
<p>可选的值:</p>
<ul>
<li><code v-pre>&quot;switch&quot;</code>: 在深色模式，浅色模式和自动之间切换 (默认)</li>
<li><code v-pre>&quot;toggle&quot;</code>: 在深色模式和浅色模式之间切换</li>
<li><code v-pre>&quot;auto&quot;</code>: 自动根据用户设备主题或当前时间决定是否应用深色模式</li>
<li><code v-pre>&quot;enable&quot;</code>: 强制深色模式</li>
<li><code v-pre>&quot;disable&quot;</code>: 禁用深色模式</li>
</ul>
<p><code v-pre>$isDarkmode</code> 在所有 Markdown 文件中都可用。</p>
<h1 id="_2-主题色" tabindex="-1"><a class="header-anchor" href="#_2-主题色" aria-hidden="true">#</a> 2.主题色</h1>
<p>主题允许你自定义主题颜色，甚至提供选择器。</p>
<h2 id="_2-1-设置默认主题色" tabindex="-1"><a class="header-anchor" href="#_2-1-设置默认主题色" aria-hidden="true">#</a> 2.1 设置默认主题色</h2>
<p>你应该在 .vuepress/styles/palette.scss 中通过 $theme-color 设置站点的默认主题颜色：</p>
<div class="language-scss line-numbers-mode" data-ext="scss"><pre v-pre class="language-scss"><code><span class="token property"><span class="token variable">$theme-color</span></span><span class="token punctuation">:</span> #f00<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_2-2-主题色选择器" tabindex="-1"><a class="header-anchor" href="#_2-2-主题色选择器" aria-hidden="true">#</a> 2.2 主题色选择器</h2>
<p>你需要在 .vuepress/styles/config.scss 中通过 $theme-colors 设置一系列你想要启用的其他主题色：</p>
<div class="language-scss line-numbers-mode" data-ext="scss"><pre v-pre class="language-scss"><code><span class="token property"><span class="token variable">$theme-colors</span></span><span class="token punctuation">:</span> #2196f3<span class="token punctuation">,</span> #f26d6d<span class="token punctuation">,</span> #3eaf7c<span class="token punctuation">,</span> #fb9b5f<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="_3-图标支持" tabindex="-1"><a class="header-anchor" href="#_3-图标支持" aria-hidden="true">#</a> 3.图标支持</h1>
<h1 id="_4-代码主题-使用-shiki-高亮器" tabindex="-1"><a class="header-anchor" href="#_4-代码主题-使用-shiki-高亮器" aria-hidden="true">#</a> 4.代码主题-使用 Shiki 高亮器</h1>
</div></template>


