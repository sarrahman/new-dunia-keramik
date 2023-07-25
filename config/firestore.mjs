import { Firestore } from "@google-cloud/firestore";
import dotenv from "dotenv";

dotenv.config();

// Inisialisasi Firestore
const firestore = new Firestore({
  projectId: "dunia-keramik-smd",
  credentials: {
    client_email: "dunia-keramik@dunia-keramik-smd.iam.gserviceaccount.com",
    private_key:
      "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDpX0gBWZF2/wjj\n7VNRnA7YC6GyqsYO91/2NMEuJbzTFf6xZ/QbmxgIzgimjnDQn13KBXiTbYEGSlLa\nbyctLpVoUTzv6zeKPl/+erFE8WRcuYR3X0viBXZv7a98chVC51BGh0uNYmJJM5VZ\n49XWnwob+AkT9YdeGG5eLZreTh1qpSCLv/6WVPAp1eJl9X6IdajC02GRZ4pWRR5D\nxGp99BTZdnpf3u8leS7XUbzPQHLX/QPtPRQqe1TqYJfIQWDhiRFhuKhSiIYMnlxK\ntcC5WU6MbrX24C4cgKjCdCd/Hw6tsrRzlC3yBskBtfRLxKdKTiek+OyLtf7DhiTK\n1xEiq6d9AgMBAAECggEAaqghQHyu/rOQXJsaeTHZluO6Au4Jls14Dg4OPAkDQ3XJ\n8UqRRgyb72o6ieSPqskrFClr8fUaAsX1F9+1B/FCV2rJbt0RhRz8wlFQszGfrMEc\nyXHEPIhCmOUITtfU377X8WPkI7nTMaFhoLOAB5aoCCBUBcsxEtAXoPM21GLfDt2J\nlu8p0/Q3SPdohqM9/9zu4D/FSE3Mmf1FPlw2UgrjrvL3//xV1KBaPk3WV9ebYMsX\npm2BLEF2h7Gmo0/liwZS6QVFH9DGsv6ezdgJg3KENyaHbzHiYrMaJfcErGAMFclo\nPzZSIv6F+eIp9XIUwOhaIedjPjB++m68CIKoBYrsAQKBgQD03Mwg+e7jI4WE7Ilv\nVeqMPe7JfFbL4fnAPBf1KBRMF1m7KuYlQZfLFRaugFUGLAE4oPBb9LlXAbcUUDIP\ntw/suFTsAewp4aQarFnijPysry89/Gd26A+bxN83i2Gzy2TkeeDhl//XEkTzDZ+w\nz+Jiohz2OgfILmA/zodQr6arTwKBgQDz/LCTvPZddYEsQp7kOxC6oPBOttEcvyZz\nZpE0ZKIPYAEQRpNn1KXpg4d16vipdGgqme5Lrp/HrT3nZHLMA0K7x0S1bw5bCqiZ\nlJdKywc7w7heoV3DECfHTmRvpkwwTeGFgjD2QUT0MDE+2lljcbGOOQAFUGr0kx3F\nVXwxEB9dcwKBgQDX5EFapeL5g506qK84aeEmC4kZPzbsBm8FDjb1YYQb3s6v1tAa\ncy3Z0dswule83FmrS0MBYNF1JD7+ewLYlkhFJ/VALSXDe34MQn/x3ur9emxF0+CJ\nl2wDpF5HA+597swjIk6juTfKsgH25sEwzOnGmza75khsOG+GcpseCfECwwKBgQDX\nDYICJksso1ag0XPFjT44kYRejQsSAHX+v4f7GzwwuxkU5HAm06sNgQ5T5DEbA2yR\nKC5+7MMOt+dZXhNFORaH9qLcHLAVlPZ4sB0OIpgUmHWYizjepw24waMLOhPre6nt\nCIzpcSw644N0d/bUDTFIP3uCM5iiTE2wUqHtiN1sewKBgERWyj7qqe4ON0U32Z8L\n/dRapVPk/+Dznk22RW3QfpPJnDMOShp9k3Lj9T75+/scWlEbFhmc3/b8TN+0LGVM\n6lij8W2UWYs3mtXN1GaJi+SdbeDju2JIDibnie+bTzxk3nk2aBVGj3N2/OE6H/iu\niV5JnENwyQGBmQc4VbLog6Cw\n-----END PRIVATE KEY-----\n",
  },
});

export default firestore;
