app.service("dataService", [
    function() {
        return {
            getAvailableLanguagess: function() {
                return ['Italiano', 'Francese', 'Inglese', 'Tedesco'];
            },
            getKnoledgeLevels: function() {
                return ['Elementare', 'Intermedio', 'Avanzato', 'Madrelingua'];
            },
            getAvailableCourses: function() {
                return [{
                    'id': '1',
                    'label': 'Unione e distacco dei veicoli (Modulo FT-A, dal 05/09/2016)'
                }, {
                    'id': '2',
                    'label': 'Predisposizione dei documenti di scorta ai treni (Modulo FT-B, dal 19/09/2016)'
                }, {
                    'id': '3',
                    'label': 'Accompagnamento dei treni (Modulo D, dal 17/10/2016)'
                }, {
                    'id': '4',
                    'label': 'Condotta dei treni (Licenza Europea, dal 13/06/2016)'
                }, {
                    'id': '5',
                    'label': 'Condotta dei treni (Certificato Complementare Armonizzato A, dal 05/09/2016)'
                }, {
                    'id': '6',
                    'label': 'Condotta dei treni (Certificato Complementare Armonizzato B, dal 03/10/2016)'
                }, {
                    'id': '7',
                    'label': 'Verifica dei veicoli (Modulo VV, dal 10/10/2016)'
                }, {
                    'id': '8',
                    'label': '1.5	Corso di formazione per il conseguimento della Licenza Europea'
                }];
            }
        };
    }
]);