export function divStyle (user) {
    return {
        backgroundImage: `url(${user.avatarURL})`
    }
};

export function getFixedNumber (option) {
    let optionOneVotes = option.votes.length;
    optionOneVotes = optionOneVotes / 3 * 100;
    return optionOneVotes.toFixed();
}
