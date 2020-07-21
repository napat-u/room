import React from 'react';
import { Dropdown } from 'semantic-ui-react';

class CountrySelect extends React.Component {
    state = {
        countryOptions: [
            { key: 'af', value: 'af', flag: 'af', text: 'Afghanistan' },
            { key: 'ar', value: 'ar', flag: 'ar', text: 'Argentina' },
            { key: 'au', value: 'au', flag: 'au', text: 'Australia' },
            { key: 'at', value: 'at', flag: 'at', text: 'Austria' },
            { key: 'be', value: 'be', flag: 'be', text: 'Belgium' },
            { key: 'br', value: 'br', flag: 'br', text: 'Brazil' },
            { key: 'bn', value: 'bn', flag: 'bn', text: 'Brunei' },
            { key: 'kh', value: 'kh', flag: 'kh', text: 'Cambodia' },
            { key: 'ca', value: 'ca', flag: 'ca', text: 'Canada' },
            { key: 'cn', value: 'cn', flag: 'cn', text: 'China' },
            { key: 'co', value: 'co', flag: 'co', text: 'Colombia' },
            { key: 'cr', value: 'cr', flag: 'cr', text: 'Costa Rica' },
            { key: 'cu', value: 'cu', flag: 'cu', text: 'Cuba' },
            { key: 'cz', value: 'cz', flag: 'cz', text: 'Czech Republic' },
            { key: 'dk', value: 'dk', flag: 'dk', text: 'Denmark' },
            { key: 'eg', value: 'eg', flag: 'eg', text: 'Egypt' },
            { key: 'gb', value: 'gb', flag: 'gb', text: 'England' },
            { key: 'fi', value: 'fi', flag: 'fi', text: 'Finland' },
            { key: 'fr', value: 'fr', flag: 'fr', text: 'France' },
            { key: 'de', value: 'de', flag: 'de', text: 'Germany' },
            { key: 'hk', value: 'hk', flag: 'hk', text: 'Hong Kong' },
            { key: 'hu', value: 'hu', flag: 'hu', text: 'Hungary' },
            { key: 'in', value: 'in', flag: 'in', text: 'India' },
            { key: 'id', value: 'id', flag: 'id', text: 'Indonesia' },
            { key: 'ir', value: 'ir', flag: 'ir', text: 'Iran' },
            { key: 'iq', value: 'iq', flag: 'iq', text: 'Iraq' },
            { key: 'ie', value: 'ie', flag: 'ie', text: 'Ireland' },
            { key: 'il', value: 'il', flag: 'il', text: 'Israel' },
            { key: 'it', value: 'it', flag: 'it', text: 'Italy' },
            { key: 'jm', value: 'jm', flag: 'jm', text: 'Jamaica' },
            { key: 'jp', value: 'jp', flag: 'jp', text: 'Japan' },
            { key: 'la', value: 'la', flag: 'la', text: 'Laos' },
            { key: 'my', value: 'my', flag: 'my', text: 'Malaysia' },
            { key: 'mx', value: 'mx', flag: 'mx', text: 'Mexico' },
            { key: 'mn', value: 'mn', flag: 'mn', text: 'Mongolia' },
            { key: 'ma', value: 'ma', flag: 'ma', text: 'Morocco' },
            { key: 'np', value: 'np', flag: 'np', text: 'Nepal' },
            { key: 'nl', value: 'nl', flag: 'nl', text: 'Netherlands' },
            { key: 'nz', value: 'nz', flag: 'nz', text: 'New Zealand' },
            { key: 'no', value: 'no', flag: 'no', text: 'Norway' },
            { key: 'pk', value: 'pk', flag: 'pk', text: 'Pakistan' },
            { key: 'ph', value: 'ph', flag: 'ph', text: 'Philippines' },
            { key: 'pl', value: 'pl', flag: 'pl', text: 'Poland' },
            { key: 'qa', value: 'qa', flag: 'qa', text: 'Qatar' },
            { key: 'ro', value: 'ro', flag: 'ro', text: 'Romania' },
            { key: 'ru', value: 'ru', flag: 'ru', text: 'Russia' },
            { key: 'sa', value: 'sa', flag: 'sa', text: 'Saudi Arabia<' },
            { key: 'sg', value: 'sg', flag: 'sg', text: 'Singapore' },
            { key: 'za', value: 'za', flag: 'za', text: 'South Africa' },
            { key: 'kr', value: 'kr', flag: 'kr', text: 'South Korea' },
            { key: 'es', value: 'es', flag: 'es', text: 'Spain' },
            { key: 'lk', value: 'lk', flag: 'lk', text: 'Sri Lanka' },
            { key: 'se', value: 'se', flag: 'se', text: 'Sweden' },
            { key: 'ch', value: 'ch', flag: 'ch', text: 'Switzerland' },
            { key: 'tw', value: 'tw', flag: 'tw', text: 'Taiwan' },
            { key: 'th', value: 'th', flag: 'th', text: 'Thailand' },
            { key: 'tr', value: 'tr', flag: 'tr', text: 'Turkey' },
            { key: 'us', value: 'us', flag: 'us', text: 'United States' },
            { key: 've', value: 've', flag: 've', text: 'Venezuela' },
            { key: 'vn', value: 'vn', flag: 'vn', text: 'Vietnam' },
        ]
    }

    render() {
        return (
            <div className="item" style={{textAlign: 'left'}}>
                <h3>Depart From</h3>
                <Dropdown
                    placeholder='Select Country'
                    fluid
                    search
                    selection
                    options={this.state.countryOptions}
                />
            </div>
        )
    }
}

export default CountrySelect;