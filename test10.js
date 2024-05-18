function test10(input) {
    let text = input.match(/[A-Z][a-z]*[a-z]+/g);
    console.log(text.join(`, `));
}
test10('SplitMeIfYouCanHaHaYouCantOrYouCan');

