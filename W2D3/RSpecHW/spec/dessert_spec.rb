require 'rspec'
require 'dessert'

=begin
Instructions: implement all of the pending specs (the `it` statements without blocks)! Be sure to look over the solutions when you're done.
=end

describe Dessert do
  let(:chef) { double("chef", :name => "Billy") }
  subject(:ice_cream) {Dessert.new("ice cream", 10, chef)}

  describe "#initialize" do
    it "sets a type" do
      expect(ice_cream.type).to eq("ice cream")
    end

    it "sets a quantity" do
      expect(ice_cream.quantity).to eq(10)
    end

    it "starts ingredients as an empty array" do
      expect(ice_cream.ingredients).to be_empty
    end

    it "raises an argument error when given a non-integer quantity" do
      expect { Dessert.new("ice cream", "10", chef) }.to raise_error(ArgumentError)
    end
  end

  describe "#add_ingredient" do
    it "adds an ingredient to the ingredients array" do
      expect(ice_cream.ingredients).to_not include("cream")
      ice_cream.add_ingredient("cream")
      expect(ice_cream.ingredients).to include("cream")
    end
  end

  describe "#mix!" do
    it "shuffles the ingredient array" do
      ingredients = ["ice", "milk", "cream", "flavor"]
      ingredients.each do |i|
        ice_cream.add_ingredient(i)
      end
      expect(ice_cream.ingredients).to eq(ingredients)
      ice_cream.mix!
      expect(ice_cream.ingredients).to_not eq(ingredients)
      expect(ice_cream.ingredients.sort).to eq(ingredients.sort)
    end
  end

  describe "#eat" do
    it "subtracts an amount from the quantity" do
      ice_cream.eat(5)
      expect(ice_cream.quantity).to eq(5)
    end

    it "raises an error if the amount is greater than the quantity" do
      expect {ice_cream.eat(15)}.to raise_error("not enough left!")
    end
  end

  describe "#serve" do
    it "contains the titleized version of the chef's name" do
      allow(chef).to receive(:titleize).and_return("Chef Billy the Great Baker")
      expect(ice_cream.serve).to eq("Chef Billy the Great Baker has made 10 ice creams!")
    end
  end

  describe "#make_more" do
    it "calls bake on the dessert's chef with the dessert passed in" do
      allow(chef).to receive(:bake).with(ice_cream)
      ice_cream.make_more
    end
  end
end
