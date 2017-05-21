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
