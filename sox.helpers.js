SOHelper = {
    StackExchange: function() {
        if(location.hostname.indexOf('github.com') === -1) { //if not on GH...
            if(typeof StackExchange !== "undefined") {
                return StackExchange;   
            } else {
                return window.eval("StackExchange");
            }
        } else {
            return undefined;
        }
    },

    getUserId: function() {
        return SOHelper.StackExchange().options.user.userId;
    },

    getUsername: function() {
        var $uname = $('body > div.topbar > div > div.topbar-links > a > div.gravatar-wrapper-24');
        return ($uname.length ? $uname.attr('title') : false);
    },

    getReputation: function() {
        return SOHelper.StackExchange().options.user.rep;
    },

    getSiteURL: function(type) {
        return (type == 'full' ? location.href : location.hostname);
    },

    getSiteName: function() {
        return (SOHelper.getSiteType() === 'chat' ? $('#footer-logo a').attr('title') : SOHelper.StackExchange().options.site.name);
    },

    getApiSiteParameter: function(siteName) {
        var sites = {
            "Stack Overflow": "stackoverflow",
            "Server Fault": "serverfault",
            "Super User": "superuser",
            "Meta Stack Exchange": "meta",
            "Web Applications": "webapps",
            "Web Applications Meta": "meta.webapps",
            "Arqade": "gaming",
            "Arqade Meta": "meta.gaming",
            "Webmasters": "webmasters",
            "Webmasters Meta": "meta.webmasters",
            "Seasoned Advice": "cooking",
            "Seasoned Advice Meta": "meta.cooking",
            "Game Development": "gamedev",
            "Game Development Meta": "meta.gamedev",
            "Photography": "photo",
            "Photography Meta": "meta.photo",
            "Cross Validated": "stats",
            "Cross Validated Meta": "meta.stats",
            "Mathematics": "math",
            "Mathematics Meta": "meta.math",
            "Home Improvement": "diy",
            "Home Improvement Meta": "meta.diy",
            "Meta Super User": "meta.superuser",
            "Meta Server Fault": "meta.serverfault",
            "Geographic Information Systems": "gis",
            "Geographic Information Systems Meta": "meta.gis",
            "TeX - LaTeX": "tex",
            "TeX - LaTeX Meta": "meta.tex",
            "Ask Ubuntu": "askubuntu",
            "Ask Ubuntu Meta": "meta.askubuntu",
            "Personal Finance &amp; Money": "money",
            "Personal Finance &amp; Money Meta": "meta.money",
            "English Language &amp; Usage": "english",
            "English Language &amp; Usage Meta": "meta.english",
            "Stack Apps": "stackapps",
            "User Experience": "ux",
            "User Experience Meta": "meta.ux",
            "Unix &amp; Linux": "unix",
            "Unix &amp; Linux Meta": "meta.unix",
            "WordPress Development": "wordpress",
            "WordPress Development Meta": "meta.wordpress",
            "Theoretical Computer Science": "cstheory",
            "Theoretical Computer Science Meta": "meta.cstheory",
            "Ask Different": "apple",
            "Ask Different Meta": "meta.apple",
            "Role-playing Games": "rpg",
            "Role-playing Games Meta": "meta.rpg",
            "Bicycles": "bicycles",
            "Bicycles Meta": "meta.bicycles",
            "Programmers": "programmers",
            "Programmers Meta": "meta.programmers",
            "Electrical Engineering": "electronics",
            "Electrical Engineering Meta": "meta.electronics",
            "Android Enthusiasts": "android",
            "Android Enthusiasts Meta": "meta.android",
            "Board &amp; Card Games": "boardgames",
            "Board &amp; Card Games Meta": "meta.boardgames",
            "Physics": "physics",
            "Physics Meta": "meta.physics",
            "Homebrewing": "homebrew",
            "Homebrewing Meta": "meta.homebrew",
            "Information Security": "security",
            "Information Security Meta": "meta.security",
            "Writers": "writers",
            "Writers Meta": "meta.writers",
            "Video Production": "video",
            "Video Production Meta": "meta.video",
            "Graphic Design": "graphicdesign",
            "Graphic Design Meta": "meta.graphicdesign",
            "Database Administrators": "dba",
            "Database Administrators Meta": "meta.dba",
            "Science Fiction &amp; Fantasy": "scifi",
            "Science Fiction &amp; Fantasy Meta": "meta.scifi",
            "Code Review": "codereview",
            "Code Review Meta": "meta.codereview",
            "Programming Puzzles &amp; Code Golf": "codegolf",
            "Programming Puzzles &amp; Code Golf Meta": "meta.codegolf",
            "Quantitative Finance": "quant",
            "Quantitative Finance Meta": "meta.quant",
            "Project Management": "pm",
            "Project Management Meta": "meta.pm",
            "Skeptics": "skeptics",
            "Skeptics Meta": "meta.skeptics",
            "Physical Fitness": "fitness",
            "Physical Fitness Meta": "meta.fitness",
            "Drupal Answers": "drupal",
            "Drupal Answers Meta": "meta.drupal",
            "Motor Vehicle Maintenance &amp; Repair": "mechanics",
            "Motor Vehicle Maintenance &amp; Repair Meta": "meta.mechanics",
            "Parenting": "parenting",
            "Parenting Meta": "meta.parenting",
            "SharePoint": "sharepoint",
            "SharePoint Meta": "meta.sharepoint",
            "Music: Practice &amp; Theory": "music",
            "Music: Practice &amp; Theory Meta": "meta.music",
            "Software Quality Assurance &amp; Testing": "sqa",
            "Software Quality Assurance &amp; Testing Meta": "meta.sqa",
            "Mi Yodeya": "judaism",
            "Mi Yodeya Meta": "meta.judaism",
            "German Language": "german",
            "German Language Meta": "meta.german",
            "Japanese Language": "japanese",
            "Japanese Language Meta": "meta.japanese",
            "Philosophy": "philosophy",
            "Philosophy Meta": "meta.philosophy",
            "Gardening &amp; Landscaping": "gardening",
            "Gardening &amp; Landscaping Meta": "meta.gardening",
            "Travel": "travel",
            "Travel Meta": "meta.travel",
            "Personal Productivity": "productivity",
            "Personal Productivity Meta": "meta.productivity",
            "Cryptography": "crypto",
            "Cryptography Meta": "meta.crypto",
            "Signal Processing": "dsp",
            "Signal Processing Meta": "meta.dsp",
            "French Language": "french",
            "French Language Meta": "meta.french",
            "Christianity": "christianity",
            "Christianity Meta": "meta.christianity",
            "Bitcoin": "bitcoin",
            "Bitcoin Meta": "meta.bitcoin",
            "Linguistics": "linguistics",
            "Linguistics Meta": "meta.linguistics",
            "Biblical Hermeneutics": "hermeneutics",
            "Biblical Hermeneutics Meta": "meta.hermeneutics",
            "History": "history",
            "History Meta": "meta.history",
            "LEGO&#174; Answers": "bricks",
            "LEGO&#174; Answers Meta": "meta.bricks",
            "Spanish Language": "spanish",
            "Spanish Language Meta": "meta.spanish",
            "Computational Science": "scicomp",
            "Computational Science Meta": "meta.scicomp",
            "Movies &amp; TV": "movies",
            "Movies &amp; TV Meta": "meta.movies",
            "Chinese Language": "chinese",
            "Chinese Language Meta": "meta.chinese",
            "Biology": "biology",
            "Biology Meta": "meta.biology",
            "Poker": "poker",
            "Poker Meta": "meta.poker",
            "Mathematica": "mathematica",
            "Mathematica Meta": "meta.mathematica",
            "Cognitive Sciences": "cogsci",
            "Cognitive Sciences Meta": "meta.cogsci",
            "The Great Outdoors": "outdoors",
            "The Great Outdoors Meta": "meta.outdoors",
            "Martial Arts": "martialarts",
            "Martial Arts Meta": "meta.martialarts",
            "Sports": "sports",
            "Sports Meta": "meta.sports",
            "Academia": "academia",
            "Academia Meta": "meta.academia",
            "Computer Science": "cs",
            "Computer Science Meta": "meta.cs",
            "The Workplace": "workplace",
            "The Workplace Meta": "meta.workplace",
            "Windows Phone": "windowsphone",
            "Windows Phone Meta": "meta.windowsphone",
            "Chemistry": "chemistry",
            "Chemistry Meta": "meta.chemistry",
            "Chess": "chess",
            "Chess Meta": "meta.chess",
            "Raspberry Pi": "raspberrypi",
            "Raspberry Pi Meta": "meta.raspberrypi",
            "Russian Language": "russian",
            "Russian Language Meta": "meta.russian",
            "Islam": "islam",
            "Islam Meta": "meta.islam",
            "Salesforce": "salesforce",
            "Salesforce Meta": "meta.salesforce",
            "Ask Patents": "patents",
            "Ask Patents Meta": "meta.patents",
            "Genealogy &amp; Family History": "genealogy",
            "Genealogy &amp; Family History Meta": "meta.genealogy",
            "Robotics": "robotics",
            "Robotics Meta": "meta.robotics",
            "ExpressionEngine&#174; Answers": "expressionengine",
            "ExpressionEngine&#174; Answers Meta": "meta.expressionengine",
            "Politics": "politics",
            "Politics Meta": "meta.politics",
            "Anime &amp; Manga": "anime",
            "Anime &amp; Manga Meta": "meta.anime",
            "Magento": "magento",
            "Magento Meta": "meta.magento",
            "English Language Learners": "ell",
            "English Language Learners Meta": "meta.ell",
            "Sustainable Living": "sustainability",
            "Sustainable Living Meta": "meta.sustainability",
            "Tridion": "tridion",
            "Tridion Meta": "meta.tridion",
            "Reverse Engineering": "reverseengineering",
            "Reverse Engineering Meta": "meta.reverseengineering",
            "Network Engineering": "networkengineering",
            "Network Engineering Meta": "meta.networkengineering",
            "Open Data": "opendata",
            "Open Data Meta": "meta.opendata",
            "Freelancing": "freelancing",
            "Freelancing Meta": "meta.freelancing",
            "Blender": "blender",
            "Blender Meta": "meta.blender",
            "MathOverflow": "mathoverflow.net",
            "MathOverflow Meta": "meta.mathoverflow.net",
            "Space Exploration": "space",
            "Space Exploration Meta": "meta.space",
            "Sound Design": "sound",
            "Sound Design Meta": "meta.sound",
            "Astronomy": "astronomy",
            "Astronomy Meta": "meta.astronomy",
            "Tor": "tor",
            "Tor Meta": "meta.tor",
            "Pets": "pets",
            "Pets Meta": "meta.pets",
            "Amateur Radio": "ham",
            "Amateur Radio Meta": "meta.ham",
            "Italian Language": "italian",
            "Italian Language Meta": "meta.italian",
            "Stack Overflow em Portugu&#234;s": "pt.stackoverflow",
            "Stack Overflow em Portugu&#234;s Meta": "meta.pt.stackoverflow",
            "Aviation": "aviation",
            "Aviation Meta": "meta.aviation",
            "Ebooks": "ebooks",
            "Ebooks Meta": "meta.ebooks",
            "Beer": "beer",
            "Beer Meta": "meta.beer",
            "Software Recommendations": "softwarerecs",
            "Software Recommendations Meta": "meta.softwarerecs",
            "Arduino": "arduino",
            "Arduino Meta": "meta.arduino",
            "CS50": "cs50",
            "CS50 Meta": "meta.cs50",
            "Expatriates": "expatriates",
            "Expatriates Meta": "meta.expatriates",
            "Mathematics Educators": "matheducators",
            "Mathematics Educators Meta": "meta.matheducators",
            "Meta Stack Overflow": "meta.stackoverflow",
            "Earth Science": "earthscience",
            "Earth Science Meta": "meta.earthscience",
            "Joomla": "joomla",
            "Joomla Meta": "meta.joomla",
            "Data Science": "datascience",
            "Data Science Meta": "meta.datascience",
            "Puzzling": "puzzling",
            "Puzzling Meta": "meta.puzzling",
            "Craft CMS": "craftcms",
            "Craft CMS Meta": "meta.craftcms",
            "Buddhism": "buddhism",
            "Buddhism Meta": "meta.buddhism",
            "Hinduism": "hinduism",
            "Hinduism Meta": "meta.hinduism",
            "Community Building": "communitybuilding",
            "Community Building Meta": "meta.communitybuilding",
            "Startups": "startups",
            "Startups Meta": "meta.startups",
            "Worldbuilding": "worldbuilding",
            "Worldbuilding Meta": "meta.worldbuilding",
            "スタック・オーバーフロー": "ja.stackoverflow",
            "スタック・オーバーフローMeta": "meta.ja.stackoverflow",
            "Emacs": "emacs",
            "Emacs Meta": "meta.emacs",
            "History of Science and Mathematics": "hsm",
            "History of Science and Mathematics Meta": "meta.hsm",
            "Economics": "economics",
            "Economics Meta": "meta.economics",
            "Lifehacks": "lifehacks",
            "Lifehacks Meta": "meta.lifehacks",
            "Engineering": "engineering",
            "Engineering Meta": "meta.engineering",
            "Coffee": "coffee",
            "Coffee Meta": "meta.coffee",
            "Vi and Vim": "vi",
            "Vi and Vim Meta": "meta.vi",
            "Music Fans": "musicfans",
            "Music Fans Meta": "meta.musicfans",
            "Woodworking": "woodworking",
            "Woodworking Meta": "meta.woodworking",
            "CiviCRM": "civicrm",
            "CiviCRM Meta": "meta.civicrm",
            "Health": "health",
            "Health Meta": "meta.health",
            "Stack Overflow на русском": "ru.stackoverflow",
            "Stack Overflow на русском Meta": "meta.ru.stackoverflow",
            "Русский язык": "rus",
            "Русский язык Meta": "meta.rus",
            "Mythology": "mythology",
            "Mythology Meta": "meta.mythology",
            "Law": "law",
            "Law Meta": "meta.law",
            "Open Source": "opensource",
            "Open Source Meta": "meta.opensource",
            "elementary OS": "elementaryos",
            "elementary OS Meta": "meta.elementaryos",
            "Portuguese Language": "portuguese",
            "Portuguese Language Meta": "meta.portuguese",
            "Computer Graphics": "computergraphics",
            "Computer Graphics Meta": "meta.computergraphics",
            "Hardware Recommendations": "hardwarerecs",
            "Hardware Recommendations Meta": "meta.hardwarerecs",
            "Stack Overflow en espa&#241;ol": "es.stackoverflow",
            "Stack Overflow Meta en espa&#241;ol": "meta.es.stackoverflow",
            "Documentation Beta": "docs-beta",
            "3D Printing": "3dprinting",
            "3D Printing Meta": "meta.3dprinting",
            "Ethereum": "ethereum",
            "Ethereum Meta": "meta.ethereum",
            "Latin Language": "latin",
            "Latin Language Meta": "meta.latin"
        };

        if (sites.hasOwnProperty(siteName)) {
            return (sites[siteName]);
        }
    },

    getAPISiteName: function() {
        return location.href.split('/')[2].split('.')[0];
    },

    getQuestionId: function() {
        return SOHelper.StackExchange().question.getQuestionId();
    },

    isLoggedIn: function() {
        return SOHelper.StackExchange().options.user.isRegistered;
    },

    getSiteIcon: function() {
        return "favicon-" + $(".current-site a:not([href*='meta']) .site-icon").attr('class').split('favicon-')[1];
    },

    getMetaSiteIcon: function() {
        return "favicon-" + $(".current-site a[href*='meta'] .site-icon").attr('class').split('favicon-')[1];
    },

    isOnUserProfile: function() {
        return location.href.indexOf('/users/') > -1;
    },

    getFromAPI: function(type, id, sitename, callback, sortby) {
        $.getJSON('https://api.stackexchange.com/2.2/' + type + '/' + id + '?order=desc&sort=' + (sortby || 'creation') + '&site=' + sitename, callback);
    },

    isBeta: function() {
        return ($('.beta-title').length ? true : false);
    },

    getAccessToken: function(featureId) {
        var accessTokens = JSON.parse(GM_getValue('SOX-accessTokens', "{}"));
        if (accessTokens == '') return false;
        if (accessTokens[featureId]) return accessTokens[featureId];
    },

    getSiteType: function() {
        var type = 'main';

        if (location.hostname.indexOf('chat.') > -1) {
            type = 'chat';
        } else {
            if (SOHelper.StackExchange()) {
                if (SOHelper.StackExchange().options.site.isMetaSite) {
                    type = 'meta';
                }
            }
        }
        return type;
    },

    hasPriv: (function() { //IIFE returning function saves instantiating privs multiple times
        var graduatedPrivs = {
            'access review queues': 2000,
            'access to moderator tools': 10000,
            'approve tag wiki edits': 5000,
            'cast close and reopen votes': 3000,
            'comment everywhere': 5,
            'create chat rooms': 100,
            'create gallery chat rooms': 1000,
            'create posts': 1,
            'create tag synonyms': 2500,
            'create tags': 500,
            'create wiki posts': 10,
            'edit community wiki': 100,
            'edit questions and answers': 2000,
            'established user': 1000,
            'flag posts': 15,
            'participate in meta': 5,
            'protect questions': 15000,
            'reduce ads': 200,
            'remove new user restrictions': 10,
            'set bounties': 75,
            'talk in chat': 20,
            'trusted user': 20000,
            'view close votes': 250,
            'vote down': 125,
            'vote up': 15
        };
        var betaPrivs = {
            'access review queues': 350,
            'access to moderator tools': 2000,
            'approve tag wiki edits': 1500,
            'cast close and reopen votes': 500,
            'comment everywhere': 50,
            'create chat rooms': 100,
            'create gallery chat rooms': 1000,
            'create posts': 1,
            'create tag synonyms': 1250,
            'create tags': 150,
            'create wiki posts': 10,
            'edit community wiki': 100,
            'edit questions and answers': 1000,
            'established user': 750,
            'flag posts': 15,
            'participate in meta': 5,
            'protect questions': 3500,
            'remove new user restrictions': 10,
            'set bounties': 75,
            'talk in chat': 20,
            'trusted user': 4000,
            'view close votes': 250,
            'vote down': 125,
            'vote up': 15
        };
        return function(priv) {
            if (!SOHelper.isLoggedIn()) {
                return false;
            }
            var repNeeded = SOHelper.isBeta() ? betaPrivs[priv] : graduatedPrivs[priv];
            return SOHelper.getReputation() > repNeeded;
        };
    })()
};
