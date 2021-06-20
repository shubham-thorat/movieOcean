
function useColorBadge(average) {

    if (average >= 9) {
        return 'bg-danger';
    }
    else if (average >= 7) {
        return 'bg-info';
    }
    else if (average >= 5) {
        return 'bg-success';
    }
    else return 'bg-secondary'

}

export default useColorBadge
