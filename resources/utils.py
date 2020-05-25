import json
import http.client


def get_calories(food_name):
    # print("******")
    # print(food_name)
    payload = {"query": food_name}
    conn = http.client.HTTPSConnection("trackapi.nutritionix.com")
    headers = {
        'x-app-id': 'dc01bc7c',
        'x-app-key': '51ed3d8d62920df3f832da3e879686d2',
        'Content-Type': 'application/json',
        'x-remote-user-id': '0'
    }
    conn.request("POST", "/v2/natural/nutrients",
                 json.dumps(payload), headers)
    res = conn.getresponse()
    data = res.read()
    result = json.loads(data)
    print(result)
    return result['foods'][0]['nf_calories']
