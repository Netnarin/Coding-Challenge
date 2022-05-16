# Coding-Challenge 

# Instructions for running and testing  				
# 1. install node npm
# 2. command : npm init
# 3. command : npm install
# 4. command : npm test

# Assumptions
#    Test Case #1 ( 50% )
# 1000 * 100 / 1000	= 100% (Company Production Share Percentage)
# 1500 * 100 / 1500	= 100% (Company Production Share Percentage)
# 450 * 100 / 900	= 50% (Company Production Share Percentage)
# 500 * 100 / 1000	= 50% (Company Production Share Percentage)
# 600 * 100 / 1200	= 50% (Company Production Share Percentage)
#    Result - 
#      1) Original material in tonnes, 2022 : 1000 *( False )
#      2) Original material in tonnes, 2023 : 1500 *( False )
#      √ Original material in tonnes, 2024 : 450
#      √ Original material in tonnes, 2025 : 500
#      √ Original material in tonnes, 2026 : 600

#    Test Case #2 ( 25% )
# 700 * 100 / 1000	= 70% (Company Production Share Percentage)
# 375 * 100 / 1500	= 25% (Company Production Share Percentage)
# 225 * 100 / 900	= 25% (Company Production Share Percentage)
# 250 * 100 / 1000	= 25% (Company Production Share Percentage)
# 300 * 100 / 1200	= 25% (Company Production Share Percentage)
#    Result - 
#      3) Original material in tonnes, 2022 : 700 *( False )
#      √ Original material in tonnes, 2023 : 375
#      √ Original material in tonnes, 2024 : 225
#      √ Original material in tonnes, 2025 : 250
#      √ Original material in tonnes, 2026 : 300

#    Test Case #3 ( 75% )
# 750 * 100 / 1000	= 75% (Company Production Share Percentage)
# 1125 * 100 / 1500	= 75% (Company Production Share Percentage)
# 675 * 100 / 900	= 75% (Company Production Share Percentage)
# 750 * 100 / 1000	= 75% (Company Production Share Percentage)
# 900 * 100 / 1200	= 75% (Company Production Share Percentage
#    Result - 
#      √ Original material in tonnes, 2022 : 750
#      √ Original material in tonnes, 2023 : 1125
#      √ Original material in tonnes, 2024 : 675
#      √ Original material in tonnes, 2025 : 750
#      √ Original material in tonnes, 2026 : 900

$npm test


