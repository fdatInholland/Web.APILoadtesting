import http from 'k6/http';

export let options = {
    insecureSkipTLSverify: true,
    noConnectionReuse: false,
    vus: 1,
    duration: '10s'
};

export default () => {
    http.get('http://host.docker.internal:7167/api/weatherforecast')
} 

//RUN WITH docker run --rm -i grafana/k6 run - <example.js
