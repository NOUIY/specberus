const {
    rules,
    newFeaturesRules,
    recStabilityRules,
} = require('./recommendationBase');

exports.rules = {
    ...rules,
    sotd: {
        ...rules.sotd,
        stability: recStabilityRules,
        deployment: [
            {
                data: 'noDeployment',
                errors: ['sotd.deployment.not-found'],
            },
        ],
        'new-features': newFeaturesRules,
        'rec-comment-end': [
            {
                data: 'noCommentEnd',
                errors: ['sotd.rec-comment-end.not-found'],
            },
            {
                data: 'foundMulti',
                warnings: ['sotd.rec-comment-end.multi-found'],
            },
            {
                data: 'notFound',
                errors: ['sotd.rec-comment-end.not-found'],
            },
        ],
        'rec-addition': [
            {
                data: 'wrongText',
                errors: ['sotd.rec-addition.wrong-text'],
            },
            {
                data: 'noSection',
                errors: ['sotd.rec-addition.no-section'],
            },
            {
                data: 'unnecessarySection',
                errors: ['sotd.rec-addition.unnecessary-section'],
            },
        ],
    },
    headers: {
        ...rules.headers,
        errata: [
            {
                data: 'noErrata',
                errors: ['headers.errata.no-errata'],
            },
        ],
    },
};
