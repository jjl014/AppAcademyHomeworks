def sluggish_octopus(fishes)
  fishes.each_with_index do |fish1, idx1|
    longest = true
    fishes.each_with_index do |fish2, idx2|
      next if idx1 == idx2
      longest = false if fish1.length < fish2.length
    end
    return fish1 if longest
  end
end

def dominant_octopus(fishes)
  prc = Proc.new {|fish1,fish2| fish2.length <=> fish1.length}
  fishes.merge_sort(&prc).first
end

class Array
  def merge_sort(&prc)
    prc ||= Proc.new {|x,y| x <=> y}
    mid = self.length/2
    left = self.take(mid).merge_sort(&prc)
    right = self.drop(mid).merge_sort(&prc)
    Array.merge(left, right, &prc)
  end

  def merge(left, right, &prc)
    merged = []
    case prc.call(left[0],right[0])
    when -1
      merged << left.shift
    when 0
      merged << left.shift
    when 1
      merged << right.shift
    end
    merged.concat(left).concat(right)
  end
end

def clever_octopus(fishes)
  longest_fish = fishes.first
  fishes.drop(1).each do |fish|
    longest_fish = fish if fish.length > longest_fish.length
  end
  longest_fish
end

tiles_arr = ["up", "right-up", "right", "right-down", "down", "left-down", "left", "left-up"]

def slow_dance(dir, tiles_arr)
  tiles.each_with_index do |tile, idx|
    return idx if tile == dir
  end
end

tiles_hash = {
  "up" => 0,
  "right-up" => 1,
  "right" => 2,
  "right-down" => 3,
  "down" => 4,
  "left-down" => 5,
  "left" => 6,
  "left-up" => 7
}

def fast_dance(dir, tiles_hash)
  tiles_hash[dir]
end
