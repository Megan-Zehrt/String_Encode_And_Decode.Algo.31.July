// String Encode and Decode



// Design an algorithm to encode a list of strings to a single string. 
// The encoded string is then decoded back to the original list of strings.

// Please implement encode and decode






class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        
        let result = ''

        for(let s of strs){
            
            result +=  `${s.length}#${s}`
        }

        return result
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {

        let results = []
        let i = 0

        while(i < str.length){

            let j = i

            while(str[j] !== '#'){
                j++
            }

            let length = parseInt(str.substring(i,j), 10)

            i = j + 1
            j = i + length
            results.push(str.substring(i,j))
            i = j
        }

        return results
    }
}