describe('tc1 getting to search via gopuff.com', function() {
  it('Visits gopuff.com', function() {
    
   		cy.visit('https://gopuff.com/home')

    	cy.contains('Order now!').click() 

    	cy.wait(1000)

    	cy.contains('Okay').click() 

    	cy.contains('confirm address').click() 
  
  })
})


describe('tc2 search category drinks validate sub-categories', function() {
	it('Visits https://gopuff.com/#search', function() {
		
		cy.wait(1000)

		cy.contains('search').click({force: true})

		cy.wait(1000)

		cy.contains('Drinks').click({force: true}) 

		cy.wait(1000)

		//cy.get('#side-scroll-el')
		//	.contains('Daily Doubles').should('exist')
		
		cy.get('#side-scroll-el')
			.contains('Soda').should('exist')

		cy.get('#side-scroll-el')
			.contains('Electrolytes').should('exist')

		cy.get('#side-scroll-el')
			.contains('Juice').should('exist')
		
		cy.get('#side-scroll-el')
			.contains('Energy').should('exist')

		cy.get('#side-scroll-el')
			.contains('Fancy Water').should('exist')

		cy.get('#side-scroll-el')
			.contains('Tea').should('exist')
		
		cy.get('#side-scroll-el')
			.contains('Coffee').should('exist')

		cy.get('#side-scroll-el')
			.contains('Water').should('exist')		
	
		cy.get('#side-scroll-el')
			.contains('Milk').should('exist')
		
		cy.get('#side-scroll-el')
			.contains('Well-Being').should('exist')


	})
})

describe('tc3 clicking on Soda sub category and adding to the bag', function() {
  it('Visits https://gopuff.com/#search', function() {
  			cy.wait(1000)

		cy.contains('Soda').click({force: true})

		cy.scrollTo('bottom')

		cy.wait(1000)

		cy.scrollTo('top')

		cy.wait(1000)

		cy.xpath('//*[@id="shop"]/div/div/img[2]').click()

		cy.xpath('//*[@id="shop"]/div/div/img[1]').click()

		cy.contains('Mountain Dew Zero 20oz').click({force: true})
		
		cy.get('#product_info > div.gp-product-info__content > div.product-wrapper > div.product-controls > div.c-product-footer_inside.animated.fadeIn > button')
		  .contains('Add to Bag').should('exist').click({force: true})
		
		cy.wait(1000)

		cy.scrollTo('bottom')

		cy.contains('Drinks').click({force: true}) 

		cy.scrollTo('top')

		cy.wait(2000)
	})
})


describe('tc4 searching via no text ', function() {
  it('Visits https://gopuff.com/#search', function() {
		
		cy.scrollTo('top')

		cy.wait(1000)

		cy.get('#product-search').click({force: true}).type(" ")

		cy.wait(1000)

		cy.contains('Add').should('exist')

	})
})


describe('tc5 searching via special characters only ', function() {
  it('Visits https://gopuff.com/#search', function() {
		
		cy.scrollTo('top')

		cy.wait(1000)

		cy.get('#product-search').click({force: true}).type("&")

		cy.wait(1000)

		cy.contains('Try searching something else').should('exist')

		cy.get('#product-search').click({force: true}).clear()

	})
})



describe('tc6 searching via special characters and non special characters ', function() {
  it('Visits https://gopuff.com/#search', function() {
		
		cy.scrollTo('top')

		cy.wait(1000)

		cy.get('#product-search').click({force: true}).type("chips & salsa")

		cy.wait(1000)

		cy.contains('Chips').should('exist')

		cy.contains('Salsa').should('exist')

		cy.scrollTo('bottom')

		cy.scrollTo('top')

		cy.contains('Tostitos').click({force: true})

		cy.contains('Tostitos').should('exist')

		cy.contains('Add').should('exist')

		cy.scrollTo('top')

		cy.get('#product-search').click({force: true}).clear()

		cy.contains('Popular Searches').should('exist')

	})
})


describe('tc7 searching results once search terms are cleared ', function() {
  it('Visits https://gopuff.com/#search', function() {
		
		cy.scrollTo('top')

		cy.get('#product-search').click({force: true}).clear()

		cy.contains('Popular Searches').should('exist')

		cy.get('#shopContainer > div > div.gp-new-search-landing > div:nth-child(4) > div > div.gp-button_list > div')
		  .contains('New').click({force: true})

		cy.contains('New').should('exist')

		cy.contains('Add').should('exist')

		cy.scrollTo('top')

		cy.get('#product-search').click({force: true}).clear()

		cy.contains('Popular Searches').should('exist')

	})
})


describe('tc8 searching for lighT mIller ( miller lite) ', function() {
  it('Visits https://gopuff.com/#search', function() {
		
		cy.scrollTo('top')

		cy.get('#product-search').click({force: true}).type('lighT mIller')

		cy.contains('Miller Lite').should('exist')

		cy.contains('Natural Light').should('exist')

		cy.contains('Add').should('exist')

		cy.scrollTo('bottom')

		cy.scrollTo('top')

		cy.get('#product-search').click({force: true}).clear()

		cy.contains('Popular Searches').should('exist')

	})
})

describe('tc9 searching for incomplete search terms (tilet paer) ', function() {
  it('Visits https://gopuff.com/#search', function() {
		
		cy.scrollTo('top')

		cy.get('#product-search').click({force: true}).type('tilet paer')

		cy.contains('Toilet Paper').should('exist')

		cy.contains('Bath Tissue').should('exist')

		cy.contains('Add').should('exist')

		cy.contains('Bathroom').should('exist')

		cy.get('#side-scroll-el > div:nth-child(1) > h3').click({force: true})

		cy.contains('see more BATHROOM').should('exist')

		cy.scrollTo('bottom')

		cy.scrollTo('top')

		cy.get('#product-search').click({force: true}).clear()

		cy.contains('Popular Searches').should('exist')

	})
})


describe('tc10 searching for brand names  ( Jif ) ', function() {
  it('Visits https://gopuff.com/#search', function() {
		
		cy.scrollTo('top')

		cy.get('#product-search').click({force: true}).type('JIF')

		cy.contains('JIF').should('exist')

		cy.contains('Add').should('exist')

		cy.scrollTo('bottom')

		cy.scrollTo('top')

		cy.get('#product-search').click({force: true}).clear()

		cy.contains('Popular Searches').should('exist')

	})
})

describe('tc11 searching via numbers  ( 16) ', function() {
  it('Visits https://gopuff.com/#search', function() {
		
		cy.scrollTo('top')

		cy.get('#product-search').click({force: true}).type('16')

		cy.contains('16oz').should('exist')

		cy.contains('Add').should('exist')

		cy.scrollTo('bottom')

		cy.scrollTo('top')

		cy.get('#product-search').click({force: true}).clear()

		cy.contains('Popular Searches').should('exist')

	})
})



describe('tc12 searching via random text  ( hjfrgedjfhg) ', function() {
  it('Visits https://gopuff.com/#search', function() {
		
		cy.scrollTo('top')

		cy.get('#product-search').click({force: true}).type('hjfrgedjfhg')
		
		cy.contains('Try searching something else').should('exist')

		cy.scrollTo('bottom')

		cy.scrollTo('top')

		cy.get('#product-search').click({force: true}).clear()

		cy.contains('Popular Searches').should('exist')

	})
})
