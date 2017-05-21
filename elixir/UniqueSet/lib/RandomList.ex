defmodule RandomList do

    def createRandom(count), do: createRandom(count, [])

    def createRandom(count, []), do: createRandom(count - 1, [Integer.to_string(count) <> "@example.com"])

    def createRandom(count, list) do
        #IO.puts tail
        cond do
            count == 0 -> list
            true -> createRandom(count - 1, [Integer.to_string(count) <> "@example.com" | list])
        end
    end
end
