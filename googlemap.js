    function GetMap() {
        var map = new Microsoft.Maps.Map('#myMap', {
            credentials: 'Aga4HZUL4fUTDO8z87hY0hq8kgL0fEnrDNhB0ekuHaY0tg3LZuHCouCIsJC4im0x'
        });

        //Request the user's location
        navigator.geolocation.getCurrentPosition(function (position) {
            var loc = new Microsoft.Maps.Location(
                position.coords.latitude,
                position.coords.longitude);

            //Add a pushpin at the user's location.
            var pin = new Microsoft.Maps.Pushpin(loc);
            map.entities.push(pin);

            //Center the map on the user's location.
            map.setView({ center: loc, zoom: 15 });
        });
    }
