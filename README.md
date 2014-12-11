# mogy-xmlrpc

XML-RPC activity for [mogy](https://github.com/neyric/mogy).

## Installation

In your mogy project, install the dependency using npm :

$ npm install mogy-xmlrpc --save

To register the `xmlrpc` activity to Amazon Simple Workflow :

$ mogy register

## Config

There is no configuration needed for this activity.

## Sample Decider Usage

````javascript
activity({
    name: 'publish-metaWeblog',
    activity: 'xmlrpc',
    input: {
        url: "http://my.wordpress.com/xmlrpc.php",
        method: 'metaWeblog.newPost',
        params: [0, 'username', 'password', {
            'title': "This is a test",
            'description': "content of the post",
            'mt_allow_comments': 0,  // 1 to allow comments
            'mt_allow_pings': 0,  // 1 to allow trackbacks
            'post_type': 'post',
            'mt_keywords': "cool, bada, boum",
            'categories': ["test"]
        }, true]
    }
})
````
