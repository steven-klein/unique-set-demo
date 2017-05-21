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
