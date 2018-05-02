import { defineSupportCode } from 'cucumber';

import clickElement from '../support/action/clickElement';

defineSupportCode(({ When }) => {
    When(
        /^I (click|doubleclick) on the (link|button|element) "([^"]*)?"$/,
        clickElement
    );
});