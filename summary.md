# Summary  

The resulting function has been implemented use three programming languages: JavaScript, Java, and Elixir.  With this demo using the JavaScript implementation.  They all solve the problem using the same methods:  Iterate through each item in the list, check if it exists in a set, and if not add it to the set and a new list.  Then return the new list.  The full source code for this demo page as well as the function implementations and tests can be found [here](https://github.com/steven-klein/unique-set-demo) where you can run additional tests against the Java and Elixir implementations.

### Data Structures and Logic

Using a set (Map, HashSet etc.) is useful when we are trying to guarantee uniqueness.  Depending on the implementation it will not allow duplicate keys or values.  Email addresses are inherently unique and can act as the key or be hashed for a unique key.

By adding items to a new list as we go, we're able to maintain the original order of the input list.

Iterating over the input list (n) times should allows us to stay well under 1 second when n = 100,000.  Giving us a linear runtime efficiency  of O(n).

### Additional Considerations

Depending on the source and reliability of the input data we may need to also consider the case where addresses may exists with varying letter cases: ``STEVEN@example.com``, ``steven@example.com``, ``steven@EXAMPLE.COM``.  These implementations do not check against this and makes the assumption the input data as been normalized in some way and they would all be considered unique.

From my knowledge few if any email providers enforce case sensitivity on the mailbox name, so if we did want to check against this, we should just convert the case of the string to all lowercase before checking if it exists in the set.

### JavaScript

In the JavaScript implementation we take advantage of an objects properties which must be unique by creating a new default object and adding the email address as a property when it doesn't already exist.  The @ symbol should mean we can avoid collisions with built in properties.

With a large data set this is probably better suited for a Node.js environment as opposed to being run in the browser.  Though I was surprised to see how quickly modern browsers handled a list of 100,000 entries.

``` javascript
var uniqueSet = function (list) {
  var interator = list || this
  let map = {}
  let set = []
  let index = 0

  for (index; index < interator.length; index++) {
    if (!map.hasOwnProperty(interator[index])) {
      map[interator[index]] = true
      set.push(interator[index])
    }
  }

  return set
}
```

### Java

 For the Java implementation our input data is a LinkedList and we use the HashSet structure for avoiding duplicates in our new LinkedList.

``` java
import java.util.*;

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
}
```

### Elixir

I chose to also implement this in Elixir for my own personal benefit as it's a language that I'd like to have some knowledge of.  Being a functional language we're required to use recursion to solve the problem of removing duplicates.  Similar to having multiple constructors that accept varying arguments in some Object Oriented languages Elixir employs the same concept to functions.

Aside from the use of recursion, the problem is solved using the same methods as the JavaScript and Java implementations.

``` elixir
defmodule UniqueSet do

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

end
```
