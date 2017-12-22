import m from 'mithril'

export default {
  view() {
    return (
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
      <pre>
        <code class="language-javascript">
{`function uniqueSet(list) {
  var interator = list || this
  var map = {}
  var set = []
  var index = 0

  for (index; index < interator.length; index++) {
    if (!map.hasOwnProperty(interator[index])) {
      map[interator[index]] = true
      set.push(interator[index])
    }
  }

  return set
}`}
        </code>
      </pre>
      <h3 id="java">Java</h3>
      <p>For the Java implementation our input data is a LinkedList and we use the HashSet structure for avoiding duplicates in our new LinkedList.</p>
      <pre>
        <code class="language-js">
{`import java.util.*;

class UniqueSet {

  //ListIterator
  public static LinkedList<String> filter( LinkedList<String> list )
  {

    LinkedList<String> filteredList = new LinkedList<String>();
    HashSet<String> set = new HashSet<String>(list.size());
    ListIterator<String> listIterator = list.listIterator();

    while(listIterator.hasNext()) {
      String current = listIterator.next();
      if(!set.contains(current))
      {
        set.add(current);
        filteredList.add(current);
      }
    }

    return filteredList;
  }
}`}
        </code>
      </pre>
      <h3 id="elixir">Elixir</h3>
      <p>I chose to also implement this in Elixir, for my own personal benefit, as it's a language that I'd like to have some working knowledge of.  Being a functional language we're required to use recursion to solve the problem of removing duplicates.  Similar to having multiple constructors that accept varying arguments, in some Object Oriented languages, Elixir employs the same concept to functions.</p>
      <p>Aside from the use of recursion, the problem is solved using a similar method as the JavaScript and Java implementations, using a Map to avoid duplicates and building a new list as we iterate.</p>
      <pre>
        <code class="language-javascript">
{`defmodule UniqueSet do

  def filter([head|tail]), do: filter([head|tail], %{map: %{}, list: []});

  def filter([head|tail], filtered) do
    cond do
      filtered.map[head] != nil ->
        filter(tail, filtered);
      true ->
        filter(tail, %{map: Map.put(filtered.map, head, 1), list: [head | filtered.list]});
    end
  end

  def filter([], filtered), do: Enum.reverse(filtered.list)

end`}
        </code>
      </pre>
    </div>)
  }
}
