
//  All of the tests are within the $() function,
// ensuring the tests do not run until the DOM is ready.

$(function () {
    /* This is a test suite for a RSS feeds definitions, the allFeeds variable in this application.
     */
    describe('RSS Feeds', function () {
         // This tests that the allFeeds variable has been defined and that it is not empty.

        it('are defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        // This tests that each of the items in the feed has a URL defined
        // and that the URL is not empty.


        it('url defined', function () {
            for (let feed of allFeeds) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            }

        });


        // This test goes through the whole feed and makes sure there is a name associated.

        it('name defined', function () {
            for (let feed of allFeeds) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            }
        })
    });



    describe('The menu', function () {

         // This tests that the menu element is hidden by default.


        it('menu hidden', function () {
            const body = document.querySelector('body');
            expect(body.classList.contains('menu-hidden')).toBe(true);

        })

        // This tests that the menu comes in and out of view when clicked. When clicked the first time, the menu should display. When clicked again it should close.


        it('menu toggles open', function () {
            const body = document.querySelector('body');
            const menu = document.querySelector('.menu-icon-link');
            menu.click();
            expect(body.classList.contains('menu-hidden')).toBe(false);
            menu.click();
            expect(body.classList.contains('menu-hidden')).toBe(true);
        })

    });

    describe('Initial Entries', function () {

        //This test checks the the loadFeed function is called and completes its task. It checks for at least one entry.

        beforeEach(function (done) {
            loadFeed(0, done);
        });

        it('completes work', function () {
            const entry = $('.feed .entry');
            expect(entry.length > 0).toBe(true);
        });


    //This tests new entries in allFeeds. After the initial feed is loaded  and a new post is added, it checks to make sure the content is updated.

    describe('New Feed Selection', function(){
        // let urlOne,
        //     nameOne,
        //     urlTwo,
        //     nameTwo;

        let feedOne,
            feedTwo;

        beforeEach(function(done){
            loadFeed(0, function(){
                feedOne = $('.feed').html();
            loadFeed(1, function(){
                feedTwo = $('.feed').html();
                done();
                });
            });
        });

        //After a new feed is loaded, this compares the updated names and urls to the original names and urls to ensure it is not duplicate.

         it('content appears when loaded', function(){
            expect(feedTwo).not.toBe(feedOne);
         });

        });
    });
}());

//Resources Used

// Starter Code from Udacity Front-End Nanodegree -https://github.com/udacity/frontend-nanodegree-feedreader)
// Matthew Cranford's Tutorial Part 1 -https://matthewcranford.com/feed-reader-walkthrough-part-1-starter-code/)
// Matthew Cranford's Tutorial Part 2 - https://matthewcranford.com/feed-reader-walkthrough-part-2-writing-the-first-tests/)
// Matthew Cranford's Tutorial Part 3 - https://matthewcranford.com/feed-reader-walkthrough-part-3-menu-test-suite/)
// Matthew Cranford's Tutorial Part 4 - https://matthewcranford.com/feed-reader-walkthrough-part-4-async-tests/)
