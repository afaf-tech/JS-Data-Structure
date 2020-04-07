/* Graps: Breadth-first search   */

function bfs(graph, root){
    var nodesLen= {};

    for (let i = 0; i < graph.length; i++) {
        nodesLen[i]= Infinity;        
    }
    nodesLen[root] =0;

    var queue =[root];
    var current;

    while (queue.length != 0) {
        current = queue.shift(); /* The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array. */

        var curConnected = graph[current];
        var neighbrIdx = [];
        var idx = curConnected.indexOf(1);
        while (idx != -1) {
            neighbrIdx.push(idx);
            idx=curConnected.indexOf(1, idx + 1);
        }

        for (let j = 0; j < neighbrIdx.length; j++) {
            if (nodesLen[neighbrIdx[j]] == Infinity) {
                nodesLen[neighbrIdx[j]] = nodesLen[current] +1;
                queue.push(neighbrIdx[j]);
            }            
        }
    }
    return nodesLen;
    
};


var exBFSGraph = [
    [0,1,1,1,0],
    [0,0,1,0,0],
    [1,1,0,0,0],
    [0,0,0,1,0],
    [0,1,0,0,0]
];


console.log(bfs(exBFSGraph,1));
