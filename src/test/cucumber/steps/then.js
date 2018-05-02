import {
    defineSupportCode
} from 'cucumber';

import checkInURLPath from '../support/check/checkInURLPath';

defineSupportCode(({
    Then
}) => {
    Then(
        /^I expect the url to( not)* contain "([^"]*)?"$/,
        checkInURLPath
    );
});