/* eslint-disable no-restricted-syntax */

export default {
    invalid: [
        {
            code: `
                /**
                 *
                 */
                function quux (foo) {

                }
            `,
            errors: [
                {
                    message: 'Missing JSDoc @param "foo" declaration.'
                }
            ]
        },
        {
            code: `
                /**
                 * @param foo
                 */
                function quux (foo, bar) {

                }
            `,
            errors: [
                {
                    message: 'Missing JSDoc @param "bar" declaration.'
                }
            ]
        }
    ],
    valid: [
        {
            code: `
                /**
                 * @param foo
                 */
                function quux (foo) {

                }
            `
        }
    ]
};
