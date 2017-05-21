import java.util.*;
import java.io.*;
import java.util.concurrent.TimeUnit;

public class Test
{

    public static final String ANSI_RED = "\u001B[31m";
    public static final String ANSI_GREEN = "\u001B[32m";
    public static final String ANSI_RESET = "\u001B[0m";

    public static void main(String[] args)
	{
        testOrder();
        testTime();
	}

    public static LinkedList<String> createList(File file)
    {
        Scanner scanner = null;
        LinkedList<String> list = new LinkedList<String>();

        try {
            scanner = new Scanner(file);
        }
        catch (FileNotFoundException e) {
            e.printStackTrace();
        }

        while (scanner.hasNext()) {
            list.add(scanner.next());
        }
        scanner.close();

        return list;
    }

    public static void testOrder()
    {
        File file = new File("./../data/ordered.txt");
        LinkedList<String> list = createList(file);
        LinkedList<String> filteredList = UniqueSet.filter(list);
        LinkedList<String> expectedList = new LinkedList<String>(Arrays.asList("angela@example.com", "sandy@example.com", "matthew@example.com", "steven@example.com", "david@example.com"));

        System.out.println("Test Ordered: Verifying list is in original order.\n");
        System.out.println("Original list: " + list + "\n");
        System.out.println("Filtered list: " + filteredList + "\n");

        //do comparison
        if(expectedList.equals(filteredList)) {
            System.out.println(ANSI_GREEN+"Test Ordered: SUCCESS."+ANSI_RESET+"\n");
        } else {
            System.out.println(ANSI_RED+"Test Ordered: FAILED."+ANSI_RESET+"\n");
        }
    }

    public static void testTime()
    {
        File file = new File("./../data/large.txt");
        LinkedList<String> list = createList(file);
        LinkedList<String> filteredList = null;
        long endTime, startTime;
        double duration;

        System.out.println("Test Time: Verifying execution time for 100,000 length list with 50% random duplicates is less than 1 second.\n");

        startTime = System.nanoTime();

        filteredList = UniqueSet.filter(list);

        endTime = System.nanoTime();
        duration = TimeUnit.NANOSECONDS.toMillis(endTime - startTime);

        System.out.println("UniqueSet completed in "+duration+" milliseconds.\n");
        System.out.println("Original List Length: "+list.size()+"\n");
        System.out.println("Filtered List Length: "+filteredList.size()+"\n");

        if(duration < 1000) {
            System.out.println(ANSI_GREEN+"Test Time: SUCCESS"+ANSI_RESET+"\n");
        } else {
            System.out.println(ANSI_RED+"Test Time: FAILED"+ANSI_RESET+"\n");
        }
    }
}
