import { Selector } from 'testcafe';

fixture`My first Angular Test`
    .page`http://localhost:4200`;

test('Show welcome message', async testController => {
    const message = await Selector('body > app-root > div.content > div.card.highlight-card.card-small > span').innerText;
    testController.expect(message).eql('AngularTestCafe app is running!');
});