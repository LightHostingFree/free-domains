var subDomains = [];

var validate = {
  domain: function (domain) {
    // Replace this comment with your actual domain validation logic
    // For example, you might check if the domain follows a specific pattern or is in a predefined list
    return typeof domain === 'string' && /^[\w.-]+\.eu\.org$/.test(domain);
  },

  description: function (description) {
    return typeof description === 'string' && description.length > 4;
  },
  
  // ... (other validation functions)

  subDomainData: function (data) {
    if (typeof data !== 'object') {
      throw new Error('Invalid subdomain data (must be an object)');
    }

    this.domain(data.domain);
    this.description(data.description);
    // ... (other validations)

    subDomains.push(data);
  }
};

function addSubDomain(data) {
  try {
    validate.subDomainData(data);
    console.log('Subdomain registration successful!');
  } catch (error) {
    console.error('Error registering subdomain:', error.message);
  }
}

// Example input data
var exampleInput = {
  "description": "Example Project",
  "domain": "lighthosting.eu.org",
  "subdomain": "blog",
  "owner": {
    "repo": "https://github.com/example/repo",
    "email": "contact@example.com"
  },
  "record": {
    "A": ["192.168.1.1", "192.168.1.2"],
    "AAAA": ["2001:db8::1", "2001:db8::2"],
    "CNAME": "www.example.com",
    "MX": ["mx1.example.com", "mx2.example.com"],
    "NS": ["ns1.example.com", "ns2.example.com"],
    "TXT": ["verification=abcdef123456"]
  },
  "proxied": true
};

// Try to add the new subdomain directly
addSubDomain(exampleInput);
