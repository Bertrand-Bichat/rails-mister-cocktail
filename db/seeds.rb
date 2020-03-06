require 'open-uri'
require 'json'

puts "clean database..."

Ingredient.destroy_all

puts "seeds initiated..."

url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list'
response = open(url).read
results = JSON.parse(response)
# p results
results["drinks"].each { |result| Ingredient.create(name: result["strIngredient1"]) }

# Ingredient.create(name: "lemon")
# Ingredient.create(name: "ice")
# Ingredient.create(name: "mint leaves")

puts "seeds finished !"
