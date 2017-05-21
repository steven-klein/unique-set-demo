defmodule UniqueSetTest do
  use ExUnit.Case
  doctest UniqueSet

  test "order" do
      list = ["angela@example.com","sandy@example.com","matthew@example.com","matthew@example.com","sandy@example.com","steven@example.com","david@example.com","angela@example.com","david@example.com","steven@example.com"]

      expected = ["angela@example.com","sandy@example.com","matthew@example.com","steven@example.com","david@example.com"]
      result = UniqueSet.filter(list)

      IO.puts "Original List: #{list}\n"
      IO.puts "Filtered List: #{result}\n"

      assert expected == result
  end

  test "time" do
      list = RandomList.createRandom(100000)
      measure = Benchmark.measure( fn -> UniqueSet.filter(list) end)
      IO.puts "Time test finished in #{measure} seconds.\n"

      assert measure < 1
  end

end
