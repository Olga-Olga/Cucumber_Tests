Feature: Is it friday yet?
Everybody wants to know

Background:
Given today is the first summer month



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


@first-test
Scenario Outline: Sunday isn't Friday
Given today is '<day>'
When I ask whether it's Friday now
Then I should told '<answer>'

Examples:
    |day|answer| 
    |Friday|TGIF| 
    |Sunday|Nope| 
    |other day|Nope|

@second-test
Scenario Outline: Friday is Friday
Given today is '<day>'
When I ask whether it's Friday now
Then I should told '<answer>'
And I get some rest


Examples:
    |day|answer| 
    |Friday|TGIF| 
    |Sunday|Nope| 
    |other day|Nope|