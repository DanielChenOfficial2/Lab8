describe('Party Horn Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/Part2-Cypress/');
  });

  it('First Test', () => {
    expect(true).to.equal(true);
  });
  it('Slider changes when volume input changes', () => {
    cy.get('#volume-number').clear().type('75');
    cy.get('#volume-slider').then(($el) => {expect($el).to.have.value(75);});
    
  })
  it('Input changes when volume slider changes', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get('#volume-number').then(($el) => {expect($el).to.have.value(33);});
  })
  it('volume of <audio> element changes when we change value of slider', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get("#horn-sound").then(($el) => {expect($el).to.have.prop('volume', 0.33);});
  })
  it('image and sound sources change when party horn radio button is selected', () => {
    cy.get('#radio-party-horn').check();
    cy.get("#sound-image").then(($el) => {expect($el).to.have.prop('src','http://127.0.0.1:5500/Part2-Cypress/assets/media/images/party-horn.svg');});
    cy.get("#horn-sound").then(($el) => {expect($el).to.have.prop('src', 'http://127.0.0.1:5500/Part2-Cypress/assets/media/audio/party-horn.mp3');});
  })
  it('volume image changes when increasing volumes', () => {
    cy.get('#volume-number').clear().type('0');
    cy.get("#volume-image").then(($el) => {expect($el).to.have.prop('src','http://127.0.0.1:5500/Part2-Cypress/assets/media/icons/volume-level-0.svg');});
    cy.get('#volume-number').clear().type('33');
    cy.get("#volume-image").then(($el) => {expect($el).to.have.prop('src','http://127.0.0.1:5500/Part2-Cypress/assets/media/icons/volume-level-1.svg');});
    cy.get('#volume-number').clear().type('63');
    cy.get("#volume-image").then(($el) => {expect($el).to.have.prop('src','http://127.0.0.1:5500/Part2-Cypress/assets/media/icons/volume-level-2.svg');});
    cy.get('#volume-number').clear().type('99');
    cy.get("#volume-image").then(($el) => {expect($el).to.have.prop('src','http://127.0.0.1:5500/Part2-Cypress/assets/media/icons/volume-level-3.svg');});
  })
  it('honk button is disabled when textbox input is empty or non-number', () => {
    cy.get('#volume-number').clear();
    cy.get("#honk-btn").then(($el) => {expect($el).to.have.attr('disabled','disabled');});
    cy.get('#volume-number').clear().type('Princess Connect');
    cy.get("#honk-btn").then(($el) => {expect($el).to.have.attr('disabled','disabled');});
  })
  it('error is shown when number typed is outside of given range for volume textbox input', () => {
    cy.get('#volume-number').clear().type('111');
    cy.visit('http://127.0.0.1:5500/Part2-Cypress/').then((contentWindow) => { 
      cy.get('#volume-number').clear().type('111').then(() => {;
      const matches = contentWindow.document.querySelectorAll(':invalid');  
      //const style = contentWindow.getComputedStyle(matches.item(0), '');
      console.log(matches);
      let foundVolume = false;
      for (let i = 0; i < matches.length; i++) {
        let item = matches[i];
        if (item.id == "volume-number")
          foundVolume = true;
      }
      expect(foundVolume).to.be.true;
      })
  })
    
    
    
});
})
