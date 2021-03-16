getListZone = refCode => {
    return Helper.ZONE_SERVICE.getZones(refCode)
        .then(res => res.json())
        .then((data) => {
            this.setState({
                zones: Helper.sortListDescAsc(data.filter(
                    zone => zone.country.id === this.state.countrySelectedId))
            },()=>(!this.state.zones.length && this.setState({ errMsgPostalCode: "code postal unrecognized" })));
        })
        .catch(console.log)
}

///////////////

// set state fel input
// this.setState({
//     errMsgPostalCode:'',
