Feature: Shopping cart

Scenario: calculate total cost
Given the following products are added to the shopping cart:
    |   Product    |   Price   |
    |   Laptop     |    1000   |
    |   Headphone  |    100    |
    |   Mouse      |    20     |

When I calculate the total cost
Then the total cost should be 1120


# @first-test
# Scenario Outline: Sunday isn't Friday
# Given today is Sunday
# When I ask whether it's Friday now
# Then I should told "Nope"

# @second-test
# Scenario: Friday is Friday
# Given today is Friday
# When I ask whether it's Friday now
# Then I should told "TGIF"
# And I get some rest


# @first-test
# Scenario Outline: Sunday isn't Friday
# Given today is '<day>'
# When I ask whether it's Friday now
# Then I should told '<answer>'

# Examples:
#     |day|answer| 
#     |Friday|TGIF| 
#     |Sunday|Nope| 
#     |other day|Nope|

# @second-test
# Scenario Outline: Friday is Friday
# Given today is '<day>'
# When I ask whether it's Friday now
# Then I should told '<answer>'
# And I get some rest


# Examples:
#     |day|answer| 
#     |Friday|TGIF| 
#     |Sunday|Nope| 
#     |other day|Nope|