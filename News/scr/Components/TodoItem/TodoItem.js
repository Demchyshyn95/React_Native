import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, Dimensions} from 'react-native';


export const w = Math.round(Dimensions.get('window').width);


const TodoItem = ({data: {item: {title, created, author, body}}}) => {
    const newBody = body.replace(/<[^>]+>/g, '');
    const newTitle = title.replace('<p>', '').replace('</p>', '');
    const newAuthor = author.replace(/<[^>]+>/g, '');
    const {signEl,text,h2,line,data, tinyLogo} = styles;
    return (
        <View style={signEl}>
                <Image
                    style={tinyLogo}
                    source={{
                        uri: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUQEhIVFRUVFRUVFRUVFRAVFRUVFRUWFhUVFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGi0lHSUtLS0tLS0rLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKy0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAAAAQIDBAUGBwj/xABFEAABAwIEAwQGBwUHAwUAAAABAAIDBBEFEiExBkFRE2FxgQciMpGhwRQjQlJysdElc7Kz8BUzYnSS4fEkhJM0NUOCg//EABkBAAMBAQEAAAAAAAAAAAAAAAABAgMEBf/EACQRAQEAAgICAwACAwEAAAAAAAABAhEDEiFBEzFRBGEiMkIU/9oADAMBAAIRAxEAPwDpCNCyOypAggjQQBI0LIwEASCVZCyAQgjKCASjRoIBKNHZBAKapMIUdgUqEICWwIilDZQsSxGOBhfI4NA6kfDqgH5ZABcrMY7xbHT7294v530CouIuNi9pbAwg/eebAd9t1yirD5XEvcXn7zr/AAtqfgsM+aem2PFb9uku9KQ5R+A0JPuPyUR3pQkNx2YBG17k+YCw8WGucLFth38/BjfVHiblLOHtHq5fMa/n8lleXL9aTin409T6UZNi1h8GvB8zeygP4+Mtw6Lzab2VZHgWmY6eIF1VV9IwOsNT3aEdL9ETmp3hi9+nsOuov1CkRSB2xuspFQSbh7x5kj9FPgEjN/grnKi8X40ICUAmKKoDx3qVZdE8sr4JQS7I09Ft1+yBRoISKyOyCNAEjQRhAEiSrIrIAkLIIIAWQsgjQRNkdkEYQCmqTCo7U+x1hc8kGaxrFG08Zed+Q71y/F8SfPJdxuTtfZo7gpXFuM9tNlBuG3sOX4lDoqYj1rXcfZvt4nuXHy8na6n06uLDU3UCfD9Qwu31cTpYf7+9Khw+Pk3Qd3teA6eK0FHhDRqfWcdXOO5KsYsLHl0Cz62ttxlTh55C/j/WiDMMcPWya8u5biHDgFKbQt6J/GXeOZ1GGzOOjT8k1Dw4b5n2v03A8CV1F9AOiYdQgckfHT7xiYMBaNbfBHJhDbbfBa6SnsodRAn1HZhK7DXRHOzzHJKppQ8XHmOhWoqYL3CzNVTdk+42PLqP1Cvjz63XplyYS+S7IJv6Q1GunvHP1rsSFkdkFSBI0aFkAVkEaCAJBGgUEShZBGgCsjsgjKAQlBEjCAUFWcUVnZ07rGxOitAs1x+60LfFTyXWNqsJvKRjKOIOkdffT/haCBipcDhNy487LRwM1XFg7kumjVhE1RoApca0iakxtTwammOT7XK4iklqakYpBKbenoRXStUSVisJ2qHIFFjSVT1UaoMZhu0nmNfctRVMVJXs0sVnYbEZ0FbfQGoI2nUdlQQQXe4gRoIJASCNBAEgjRFBCQRI0AECjRFAJSmpKNqAdas3x8y8TO91vgtI1UnGQHZMvyff4FRy/wClXx/7RmcNaGiytIlXUTFZMauXGeHYnwFB9aBoFCJLvVGg5n5KRGWt00Vw9JEdd3KbHPcKsNU1PRThXpNWbHISFMsdfVFISmgiRyiTOajqZbKC+Rp3KmxUCchU+IhTqiO4u0qqmmLgQdx/V1FUg5UE5lQU6DqCCTLK1jS9xDWtBLiSAABuSeQXKOK/S2Q4x0LWkDTt5ASD3xs6d59y7nC60q/H6qSGmmmhZnkZG9zGWJzOaL2sNT4DdcWZiPEMv1jTV2Oo+rZGD4NLRceSk4b6TcRpZBFWR9pb2mSxmGcDqDYfEa9UtnovDfS7UtgkbKxskxI7GQNDWAHftGg620tbfnbddD9G+O1NbSGepY1p7RzWOaMrZGC3rBt+Tszb9yo6HhbCMWd9Piztu680LHBgL9yJGWJaTzLCA7fvWkxDi/D6ORlHJK2NwDQGta7JG2wyhxaLMFrb8kCsX6T+I8Roq2N8Ty2nLG5G5WmORwv2jX6XzbaX2sRzUbg/jXEq/EmtBAgu50kTWMyxxWNiZCM175db6nkuhcW4jQx0xNcWOhktZpGfOdxkaNSedxtvcJng92HtpTLh7Wti9Yvyh2fMwah+f1rgdeuiB6X6NYrgf0gNxGd8AgMRbGZWnOHXaHNab6Cx9dvXmtqhI0RQuicUARQCK6MFBnGlZvjVxys6DfpqbLRNKzOJVbJHuhmacp9l32b/AJjxWXNlJjq+23DhcsvHpW0Dgdlbxs0VRSUhidkvcbtPcr+mCwwvh0ZTRrJYKlxiqy2jY0ukds0W95J2Gu61QhFlXVVHrmaNfj5HzWsKZfjIUVe5r/rZBYGzjHDK6JhBsR2mYc7gkCwWvgabhu+gO9wR94HmFhKDhOtilLmTWaYyy19HAvDiCCLtvYHQ917LoGG0Ra2FpJ+paBcfaIbY37u5bZdNeGON5N/5J1CNLHkjrH2BT0Ytc9VHqxfRQeqpam+97d6z1e6Z9/oxjeW+19aC8f8A1Gg8yrviKkkfHaKxOgLSbaa3sdNzlvqNlicOZW/SoO1p2RGI5XyMa8CRmpdmN7bEADw6K8ccb91OWec+otcIxQvJY4Oa9uha6wN+9oJ96nVLLm9lJNG2SXPl12zdRuP6709UwWCwyjftv7VGRBP5UFBeVR6aOInZm4fGSG5RJNb7VyckfhpmI/CoPD+BCmYX5Q6pDXuJzxte10YJfFE837INPqPkbd5eXNaW5S5RMab2mPuz6gVLDb91E1zW+BLB71ScTVDxUubmJyQxRX5kOga57vFzpJHeLyuquU1X4/O55LoqYEbg01LMT+KSZr3v8S4rW8LzR4pE+kkjYJo252RgubDK0EA9mNfosouPWjs05vWa4aLnmVdN9C2BPMr69wIjDHRRk/8AyOcWl7m9Wty2v1JHIoFZfB6+TCK8PDiYjbPcWL4C4tdnaNpGOa8EcnxuG29n6UuFZYp34gy8lPO4PLhr2TnAaP8A8B5O21seV1+lRjXSCVuxlltts6OG9u7Mxz//ANSV1Tgc9rhtLnAdmp4w4OFw4ZcuoO4IQHnYOnqDFCDJKWjsoYxdxAJJyMb/AFoOg07jwLwnJh9DM2VwMswdI9o1bHaOwYD9o9TtfTlc2nCGE4TDM80ToDM/MSGytke1mmZsYuSxl7XA7u62kxRv1Un4H/wlIVwf0H/+uf8A5N/82nXbyVxD0Kj/AKx3+Uf/ADYF2kOsnKVh26IpuSdrQXOIaBuSQAPElRaDFoJy4QzMkLLZ8jg7Le9rkacimSZdGCkqsxHiKkp3ZJqiJjvuucM3+ndAWwKq5qYFwuOZ+IUam4ww95DW1cNzsC8Nv/qsreQA5XAgg8xYg36FY82O5K34MutrNV7RHIxma4cTl7tL2urSkcomO0gzNffVrgU7RPWGPiurLzJVxGnhGFGjcnWyLTbPrsrsByASjHYI2OQq3WY49xVdk68oJqPWsmK1xAuqyrxF0Low2B8jXk5nsLfUOmpadxvt02KXiGKloaMjnlxsA22neSToPis9t/jqxpwHtv1STSD/AJS8L9k6c0/KVfbwy1d6QZYLKDVqwnmVZVFTafVAsgpnYoKR4cx4uqnQ4tPM32o6hrwOpYGGx7ja3mr3DuH4qmtpJGNEkBDRI0j2oYo3CB5B9oANjheOT4jcWe29ZjtAKjGJYC4tEtTkzCxIuAL2O6ZmFVhcvYTMu3NnZ6z2tc4adrTzN1Y62hty0c0hdbjdaZwNhodn+hRX6EOLP/GTl+CVxFjbIWOghc0TZOQu2nYdO1kDdgPst3cbNC59J6QC9gY589uYcxjnHu7SGaG/mzyVFW8SOP1dNGYy5xLSMmfO7cxRRtDRIdRnOeTU2cLo2WjPFcnazR00TTmZaNrCbuEjxHEyInUF4ZFA1xBPr516B4fw4QQQ041EUccd+uRoF/gudejfgZ0LxW1TbSAfUxHeO4sZJOj7EgN5XJOujep0Qu4IDh/oab+1nfuKj+ZEu24sPqpPwP8A4SuL+htv7Wd+4qP5kS7RjP8AdSfgf/CUjcE9DY/6t3+Vd/MgXXcRxGOnidNM4NY0XJ/IAcyeQXG/RtiEdNNJNK7KxtK4d5Jkhs1o5k22UfiXiSSulBlLmQtPqxts4tbzdYkBz7ddBt1uGtZZKvHans23jp2EEjdsbeTn/flNtBy8ASuqYLhUVLE2CFuVrf8AU53N7zzcf60ss9wZxLhrY2UsBMJ5NlAa57juS/2XPPj4aWWvmbbVCazXpDx19JSF0ZtJI8RMd90kFxd4hrXW77LA8F8CCujdVTzPa1z3BuTKXvcD673PeDpmuNrkgm62fpNw109FdgLnQyCXKNSWhrmPsOdmvLrf4VmfR9xpFTxClnuGBxdHIBmADzmIcBruSb96YWknolp/s1M4/EIHfk0LcYJg7KWljpWEuEbbZju4klzjblck6ckujq2StEkb2vadnNIcD5hS2PRdCWq2rp+0a5rtdLA8/wDlVtE6xsruVrhfKARvvayo3Mc1xcftEkW5d3iuWyyu3HOWa2tRIliZV7JEoO1U2t8cVxTvUmQ6KupU9UzWC0xY5zyiviF9NAmpY7KoxPiSGnOWR4zONrXF/AdUKXH45SWNJuOtvkl4afHnrbRUoAbYJmofZFTP0TFY/kjL6Ljx3UCebVRp5LC6D91Gq3aWSwm6fP8A44mO0PVBJQXX0jze1Z2X/wB9/wC8b+YXYKykjmYY5Y2yMO7Xta5p8iuQSD9uf96P4guyoFZeT0eYY4l30YjubNVNb5NElh5K3wrAaWm1gp44yRYuDbvI6F5u4+9WF0CgigVPw3cqrLlaYRt5ooji3ocH7Wd+4qP5ka7Ljn9zJ+B/8JXHPQ4P2of3E/8AHGux47/cyfgf/CVK3mPB8OfUSRwRgZ3kAX2Gly49wAJ8l2DCeA6GJmV8Imd9p8t3XP8AhZfKzyHiSsP6K471d+lO8jxL4h+RPvXXmIFc3464DiihfVUoLQwZpYiS5uT7T2Fxu225be1gbWtY3nowxl9RTOhkcXPgIAcdSY3XyXPO1nDwAWsqWB0b2nYscCO4tIK5Z6Hqi1U+P79Pm82PZb4PcgnSy6xssxjfA1JUEvaDBIdS6O2Vx3u6M6HU3JFieq0eNVkUNnSyMjDjYFzg257rpqnqmPGZj2uHVpBHwQTlFVSVuEzBzX+q7Vrm3MUoG7XsOzttO/QnVdawLFW1MEc7RYPbcj7rgbOb5EELCek/E43MjpgQ57ZO0dbXIAxzQO4nP7gtHwFCY6GEO3cHP8nvc5vwIPmg2nzqFiEQc0kbjUeSeLk29ym+YcurtTskUinNyoM4yvLeR1H6KbS6arls8vUxylx2uIjYLOcZ4pPFEHQhl3Oylzs3qC3tZRv7wtFBqFS8RQlzf1281pPDLGTLPVcoq+HzM7PNK57zqTsPIcghwxh80VX2cTgWXBJdewJ5aLUfQ2atLnNB3GVpy9zSddfFTOH8JaH+o0hoN7ndx6lXcpY7MuGYTta1lISBrvbkm6lylEBQ6h6zycvHUOTRV8rrlP1El0wQt+HDU3XJ/J5e16whBHZGt3Kku4Gea/6d9Ibl7cTdn2bs1gb5c+e3nZba6JC6gyroiUV0lxQCHOVxg3s+aonOV7g3spU4x/BXo7koKx1U6oZIzJKwNDHNdZ7mkEkkjQNWxxePNG9vVrhfpcEKyUKvHqlI3KuEeDn0UxldO2QGIx2EbmHVzHXuXn7m3etqxMlOsKRnXC4I6gj3rF8IcCSUVQ2c1LJAGOYWiJzScw6l55gcltGlLaUyZ/jPhRtc1ju0dG+MOyEAOac1rhzLi/sjUELnj+BqxjjkfER94SSMPmMmnvK7PZU9XHZxSojBYLwCA4PqnteNzEzMWuP+N7rFw7gBfrbRdBYDyHyS6Sl5lWDIlncq1mH6rHNd0UGqD+vuWjMQUeanCm7XjMYwNfQSNf20d3Ee00k+sPPmrXDapsjQ5p7iOYPMEcirqWhCqqjByHdpGcr+f3X9zx891l106McprSc2ct0UjMHDVVQqh7EzcjuvInq13Pw37kl0jmd46j5hOZH12sJMNi3yj3BJ9SMafJQBiJ6FNyPJ9o27huVVyh3Gz7p6evVZUVTjo3z6BTDT6XIyjpz80uGnFtlO7Ub/ABXxxuKe+iuVnFCpEcS1meUYZceN9KP6M7ogr/sO5Gq+TJPx4rW6F0i6F1s5yrpDyjTcpQDLir/CDos6TqtDhZSpxbBRqsaFSQmZxokbJP3S2FFVCzj4pLSpM+CnGlMApbXKiSMyikZ3X5D4pM8mlhz/AKKkUzVnnfTTDH2kQsTwaialFJYWSXMSkjtOSVoMOjTZjCecUhwUqRpaYHQgEd6hf2NGPZu3ua4ge7ZWqOyNSn2sVrcKZ3+8ozh7W7ABWKJ6eoXaqeemTPYq3kYmTClo+yExikRsTwgTgajQt2ZsgnUEtEVdC6SCgutyFEpqUpZKZmKYMtOo8VocOOyzkR9YLQ0JUX7VF0Cm5UbTokyIDLYpo8qOwqVjos4HqFAY5SaSHInSWTYcotTKi0a2l0xzG/kFZRKsomGysmBY79ujWklpSyVFdMBuQmHVw5XPl+qey0lyyWVe6p9bfa9/hb5pL3udzsO79UccKm+Vzwc+mj7rvh+qH00fdd8P1SxEgYgjyXgya9vMOHiP0TjKlrtnA/n7kxPCoMtMjdiusq6D0vdULJHt2cfPUfFS4a8jR/vHzCqZJuFWJCackPlRBydqSwUqyQAg99kAeUI0z2qJLwBgo7poOR5l0uU4SmJ3JZco85QQoD6y0FEVnaU+stBRlT7WuIjojcmoHJZQGf4kboD3qkjetDxCy8bu7X3LLRPUX7V6TC/RJp4sxzHyTGe5spWb7I8/0UZZemvHj7S+3to0X/JEXOO5P5BNxBOhS0JEadZGg0J0BBCaxONCACIuQDtwo0s4zW6D803JPZVLqr6xwvzH8IRclY47W7pUox3CrDUjmVNil79ExqwmWMBQ5gn6mW5AHP8AJNxMu8g8h+f/AApvk96IpC8g21AOx+RSGSl5tqB0Gl/FIfWCJxaXAXFxcgXPO3wSMIqWua119xqifh6+6mVADG7m/IAnXyTAaTzI8yidKHSE37h8/inamQNaXHwA5k8gkLCOzf8AfKCYvJ/V0EhqokfEJ5wnycCn2cQsP2JB5A/NQeyHRGYwujtkV4+K+lmzG4jzcPFrkUmIRnZw+IVSWDokmAcgjvS/8/Hf1eUVS2/tD3haOjkFtwsIyJWNJhgOuY+8pdqV4MZ/03tM/VPkrIMpsuoe/wD1FNzVkrNpH+8n81Xdl8O/qtHiTbtI7lghLa4PL5J2p4jqRpmB8QFRyTyOJNhqSTvzWdznprP4uevS9gl58ypULlQwVEml2j3lTWV1t2/FZ/21+OzxF2yRL7RUzcTaNwQlDF4+biPIo7QfFl+LxkyX2ypWYpF98fFPsxCM7Pb7wn2hXjs9LM1CYnqbaqE+rHJw94VZiWKBo1PzSuSeiTiWJBoJJWExjHJzIHwsOm5cDYjl8/eryClMjs8m3Jl9PE9SrEwst7IUybEz6/TDYnxfO1luzyuPfdv6rovC9cZYGSuOr2h1hsLi9gsLxpSNy3AstDwQxooo29xJ1O5JuPeqx8NLe2LUR1DS867D5pqCqHaOI2AtfldUtTUZWuN9zlFv66pxs7YoySfPqUbT1Z3jOoEs8UV+ZuOgPP4FTqagdGAymkLNCQ22ZoPdfUe9Y3G5JGzdtbW4IHdbZW2C8UszkuJFxseRWV23w031PazfAJyF4c866N0HjzPisRNxBKy7sgLL+qc1iAT9ptuV/gtBSTN9oO03Jvv3rWVjZqtN6qCoP7X7igq3EdRIuzSgUoFansTWpwBJulsQQMbqrmlYquIaq7pRokWV8FOBVdXkgK1eVS4rJoUqWH2oJnXclMCaedU6wrOOqn2BFIEGFKcU7PCZ9mgErsx0SWlPtKxsby012Q6Idk3oE8U24KdLlpJY3omnRN3SyklI0eR1tiVCfWSjZ3v1U2SJRHQJbq5jj7isxLtJhldby0UrBpXQRdkBcXJuT1N/mnTAl/R7c0S0+nH+I7ZnAlx1P2Ryb/v3omzZyHSlxA2YPZ8+ZTnZpbGqu1RlhjoziPZSjXfwWVxLBbHNGfDWxWpnjUcw9yfesp/Hx/WRbWVEYyPYXt+PvT0OJHIWNlewnZrtB4XK0nZN+6Ef0Vp+yE+/9C8E/VZ/btT91iCtPoDOgRo7D4p+telBBBdbjownGIIJ0j8O6uqfZGgpicipdlQ4tsgglT4/tQlPMQQUR008xLKCCaDTd08EEFlft0DKSUaCiqhlyQUEFJwh6jOQQS9tIbSyjQTFMIBBBBUmXZMtQQThT6NHdLajQSOgggghL//Z',
                    }}
                />
            <View style={text}>
                <Text style={h2}>{newTitle}</Text>
                <Text>{newBody}</Text>
                <Text>{newAuthor}</Text>
            </View>
            <View style={data}>
                <Text>{created}</Text>
            </View>
            <Text style={line}>───────────────────────────────────────</Text>

        </View>
    )
};


const styles = StyleSheet.create({
    signEl: {
        flexDirection:'row',
     justifyContent:'space-between',
        alignItems:'center',
        flexWrap:'wrap',
        height: 100,
        marginTop:10,
    },
    tinyLogo: {
        width: 100,
        height: 75,
    },
    line:{
        width:w,
    },
    data:{
    width:82,
    },

    h2:{
        fontSize:20,
        fontWeight:'bold'
    },
    text:{
        height:100,
        width: 170,
    }

});
export default TodoItem;
