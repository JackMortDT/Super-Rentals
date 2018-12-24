import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import { click, currentURL, visit } from '@ember/test-helpers'

module('Acceptance | list rentals', function(hooks) {
  setupApplicationTest(hooks);

  test('Should show rentals as the home page', async function(assert){
    await visit('/');
    assert.equal(currentURL(), '/rentals', 'Should redirect automatically');
  });

  test('Should link to information about the company', async function(assert){
    await visit('/');
    await click(".menu-contact");
    assert.equal(currentURL(), '/contact', 'Should navigate to contact');
  });

  test('Should link to contact information', async function(assert){
    await visit('/');
    await click(".menu-about");
    assert.equal(currentURL(), '/about', 'Should navigate to about');
  });

  test('Should list available rentals', async function(assert){
  });

  test('Should filter the list of rentals by city', async function(assert){
  });

  test('Should show details for a selected rental', async function(assert){
  });

});
