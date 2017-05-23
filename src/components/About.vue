<template>
  <div class="about">
    <p>The resulting function has been implemented using three programming languages: JavaScript, Java, and Elixir, with this demo using the JavaScript implementation.  They all solve the problem using the same methods:  Iterate through each item in the list, check if it exists in a map or set, and if not add it to the map or set and the new list. The full source code for this demo page, the function implementations, and cli tests can be found <a href="https://github.com/steven-klein/unique-set-demo">here</a> CLI tests are available for all three implementations if you have the required dependencies installed.</p>
    <h3 id="data-structures-and-logic">Data Structures and Logic</h3>
    <p>Using a map or set is useful when we are trying to remove duplicates since in one case it requires unique keys, and in the other unique values. Email addresses are inherently unique and can act as a key in a map.</p>
    <p>By adding items to a new list as we go, we're able to maintain the original order of the input list.</p>
    <p>The efficiency requirement should be met by a function with linear runtime O(n).</p>
    <h3 id="additional-considerations">Additional Considerations</h3>
    <p>Depending on the source and reliability of the input data we may need to also consider the case where email addresses may exists with varying letter cases: <code>STEVEN@example.com</code>, <code>steven@example.com</code>, <code>steven@EXAMPLE.COM</code>.  The implementations here do not check against this and makes the assumption the input data as been normalized in some way, in which case, each of those addresses would be considered unique.</p>
    <p>From my knowledge, few email providers enforce case sensitivity on the mailbox name, so if we did want to check against this, we should first convert the address string to all lowercase before any additional logic.</p>
    <h3 id="javascript">JavaScript</h3>
    <p>In the JavaScript implementation we take advantage of an objects map like properties which must be unique by creating a new default object and adding the email address as a property when it doesn't already exist.  The @ symbol should mean we can avoid collisions with built in properties.</p>
    <p>With a large data set this is probably better suited for a Node.js environment as opposed to being run in the browser.  Though I was surprised to see how quickly modern browsers handled a list of 100,000 entries.</p>
    <pre><code class="language-javascript"><span class="token keyword">function</span> uniqueSet <span class="token punctuation">(</span>list<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">var</span> interator <span class="token operator">=</span> list <span class="token operator">||</span> <span class="token keyword">this</span>
      <span class="token keyword">var</span> map <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
      <span class="token keyword">var</span> <span class="token keyword">set</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
      <span class="token keyword">var</span> index <span class="token operator">=</span> <span class="token number">0</span>

      <span class="token keyword">for</span> <span class="token punctuation">(</span>index<span class="token punctuation">;</span> index <span class="token operator">&lt;</span> interator<span class="token punctuation">.</span>length<span class="token punctuation">;</span> index<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>map<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span>interator<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          map<span class="token punctuation">[</span>interator<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span>
          <span class="token keyword">set</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>interator<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">return</span> <span class="token keyword">set</span>
    <span class="token punctuation">}</span>
    </code></pre>
    <h3 id="java">Java</h3>
    <p>For the Java implementation our input data is a LinkedList and we use the HashSet structure for avoiding duplicates in our new LinkedList.</p>
    <pre><code class="language-java"><span class="token keyword">import</span> java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>*<span class="token punctuation">;</span>

    <span class="token keyword">class</span> <span class="token class-name">UniqueSet</span> <span class="token punctuation">{</span>

        <span class="token comment" spellcheck="true">//ListIterator</span>
        <span class="token keyword">public</span> <span class="token keyword">static</span> LinkedList<span class="token operator">&lt;</span>String<span class="token operator">&gt;</span> <span class="token function">filter</span><span class="token punctuation">(</span> LinkedList<span class="token operator">&lt;</span>String<span class="token operator">&gt;</span> list <span class="token punctuation">)</span>
        <span class="token punctuation">{</span>

            LinkedList<span class="token operator">&lt;</span>String<span class="token operator">&gt;</span> filteredList <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LinkedList</span><span class="token operator">&lt;</span>String<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            HashSet<span class="token operator">&lt;</span>String<span class="token operator">&gt;</span> set <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashSet</span><span class="token operator">&lt;</span>String<span class="token operator">&gt;</span><span class="token punctuation">(</span>list<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            ListIterator<span class="token operator">&lt;</span>String<span class="token operator">&gt;</span> listIterator <span class="token operator">=</span> list<span class="token punctuation">.</span><span class="token function">listIterator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token keyword">while</span><span class="token punctuation">(</span>listIterator<span class="token punctuation">.</span><span class="token function">hasNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                String current <span class="token operator">=</span> listIterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>set<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span>current<span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token punctuation">{</span>
                    set<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>current<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    filteredList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>current<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>

            <span class="token keyword">return</span> filteredList<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    </code></pre>
    <h3 id="elixir">Elixir</h3>
    <p>I chose to also implement this in Elixir, for my own personal benefit, as it's a language that I'd like to have some working knowledge of.  Being a functional language we're required to use recursion to solve the problem of removing duplicates.  Similar to having multiple constructors that accept varying arguments, in some Object Oriented languages, Elixir employs the same concept to functions.</p>
    <p>Aside from the use of recursion, the problem is solved using a similar method as the JavaScript and Java implementations, using a Map to avoid duplicates and building a new list as we iterate.</p>
    <pre><code class="language-elixir"><span class="token keyword">defmodule</span> UniqueSet <span class="token keyword">do</span>

      <span class="token keyword">def</span> filter<span class="token punctuation">(</span><span class="token punctuation">[</span>head<span class="token operator">|</span>tail<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token attr-name">do:</span> filter<span class="token punctuation">(</span><span class="token punctuation">[</span>head<span class="token operator">|</span>tail<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">%</span><span class="token punctuation">{</span><span class="token attr-name">map:</span> <span class="token punctuation">%</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token attr-name">list:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">)</span>;

      <span class="token keyword">def</span> filter<span class="token punctuation">(</span><span class="token punctuation">[</span>head<span class="token operator">|</span>tail<span class="token punctuation">]</span><span class="token punctuation">,</span> filtered<span class="token punctuation">)</span> <span class="token keyword">do</span>
        <span class="token keyword">cond</span> <span class="token keyword">do</span>
            filtered<span class="token punctuation">.</span>map<span class="token punctuation">[</span>head<span class="token punctuation">]</span> <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token operator">-&gt;</span>
                filter<span class="token punctuation">(</span>tail<span class="token punctuation">,</span> filtered<span class="token punctuation">)</span>;
            <span class="token boolean">true</span> <span class="token operator">-&gt;</span>
                filter<span class="token punctuation">(</span>tail<span class="token punctuation">,</span> <span class="token punctuation">%</span><span class="token punctuation">{</span><span class="token attr-name">map:</span> Map<span class="token punctuation">.</span>put<span class="token punctuation">(</span>filtered<span class="token punctuation">.</span>map<span class="token punctuation">,</span> head<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token attr-name">list:</span> <span class="token punctuation">[</span>head <span class="token operator">|</span> filtered<span class="token punctuation">.</span>list<span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">)</span>;
        <span class="token keyword">end</span>
      <span class="token keyword">end</span>

      <span class="token keyword">def</span> filter<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> filtered<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token attr-name">do:</span> Enum<span class="token punctuation">.</span>reverse<span class="token punctuation">(</span>filtered<span class="token punctuation">.</span>list<span class="token punctuation">)</span>

    <span class="token keyword">end</span>
    </code></pre>
  </div>
</template>

<script>
export default {
  name: 'about'
}
</script>
