require 'rspec'
require 'lru_cache'

describe LRUCache do
  subject(:lru) { LRUCache.new(4) }

  describe "#add" do
    it "adds an element to the empty cache" do
      lru.add(5)
      expect(lru.cache).to eq([5])
    end

    it "adds an element to the cache in LRU order" do
      lru.add(5)
      lru.add(6)
      lru.add("hello")
      expect(lru.cache).to eq([5,6,"hello"])
    end

    it "takes care of when an elemnt exists in the cache" do
      lru.add(5)
      lru.add(2)
      lru.add(3)
      lru.add(5)
      expect(lru.cache).to eq([2,3,5])
    end

    it "adjusts to add a new element when the cache is full" do
      lru.add(2)
      lru.add("hello")
      lru.add("eheh")
      lru.add(3)
      lru.add(50)
      expect(lru.cache).to eq(["hello","eheh",3,50])
    end
  end

  describe "#count" do
    it "returns the cout of the current number of elements in the cache" do
      lru.add(3)
      expect(lru.count).to eq(1)
    end
  end

  describe "#show" do
    it "shows the items in the cache with the LRU item first" do
      lru.add(2)
      lru.add("hello")
      lru.add("eheh")
      lru.add(3)
      expect(lru.show).to eq([2,"hello","eheh",3])
    end
  end
end
