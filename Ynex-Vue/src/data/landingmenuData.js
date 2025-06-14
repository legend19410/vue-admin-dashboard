export let menuData = [
    { path: 'home', type: 'link', title: 'Home', selected: false, active: false, dirchange: false, },
    { path: 'about', type: 'link', title: 'About', selected: false, active: false, dirchange: false, },
    {
        path: 'more', type: 'sub', title: 'More', selected: false, active: false, dirchange: false, children: [

            { path: 'statistics', type: 'link', title: 'Statistics', selected: false, active: false, dirchange: false, },
            { path: 'our mission', type: 'link', title: 'Our Mission', selected: false, active: false, dirchange: false, },
            { path: 'features', type: 'link', title: 'Features', selected: false, active: false, dirchange: false, },
            { path: 'testimonials', type: 'link', title: 'Testimonials', selected: false, active: false, dirchange: false, },
            {
                path: 'level-2', type: 'sub', title: 'Level-2', selected: false, active: false, dirchange: false, children: [
                    { path: 'level-2-1', type: 'link', title: 'Level-2-1', selected: false, active: false, dirchange: false, },
                    {
                        path: 'level-2-2', type: 'sub', title: 'Level-2-2', selected: false, active: false, dirchange: false, children: [
                            { path: 'level-2-2-1', type: 'link', title: 'Level-2-2-1', selected: false, active: false, dirchange: false, },
                            { path: 'level-2-2-2', type: 'link', title: 'Level-2-2-2', selected: false, active: false, dirchange: false, },
                        ]
                    },
                ]
            },

        ]
    },
    { path: 'testimonials', type: 'link', title: 'Clients', selected: false, active: false, dirchange: false, },
    { path: 'team', type: 'link', title: 'Team', selected: false, active: false, dirchange: false, },
    { path: 'pricing', type: 'link', title: 'Pricing', selected: false, active: false, dirchange: false, },
    { path: 'faq', type: 'link', title: 'Faq\'s', selected: false, active: false, dirchange: false, },
    { path: 'contact', type: 'link', title: 'Contact', selected: false, active: false, dirchange: false, },
];