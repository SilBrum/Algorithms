//Welcome to my djikstra algorithm used to find the shortest distance of travel between the start node and the target node.
 
//Scope: n nodes labeled from 1 to n; times[i] = (ui, vi, wi); ui = source node, vi = target node, wi time; given node = k, return time for all the nodes to receive signal
 const networkDelayTime = function(times, n, k) {
    const graph = {};
    const distances = {};
    const previous = {};
    const queue = [];
    const visited = new Set();

    //creating the graph
    for (let i = 1; i <=n; i++) {
        graph[i] = {};
    }
    for (let [u, v, w] of times) {
        graph[u][v] = w;
    }

    //setting distances

    for (let node in graph) {
        if (node == k) {
            distances[node] = 0;
            queue.push([node, 0]);
        }
        else {
            distances[node] = Infinity;;
        }
        previous[node] = null;
    }

    //Processing the queue and sorting by distance
    while (queue.length > 0) {
        queue.sort((a,b) => a[1] - b[1]);
        const [currentNode, currentDistance] = queue.shift();

        if (visited.has(currentNode)) continue;
        visited.add(currentNode);

    //exploring neighbors of the current node
    for (let neighbor in graph[currentNode]) {
        const weight = graph[currentNode][neighbor];
        const newDistance = distances[currentNode] + weight;

    // Updating distance if a shorter path is found
    if (newDistance < distances[neighbor]) {
        distances[neighbor] = newDistance;
        previous[neighbor] = currentNode;
        queue.push([neighbor, newDistance]);
    }
    }
    }

    // finding the maximum time to reach all nodes
    const maxTime = Math.max(...Object.values(distances));
    return maxTime === Infinity ? -1 : maxTime;
    
};

const times = [[2,1,1],[2,3,1],[3,4,1]];
const n = 4;
const k = 2;
console.log("Result:",networkDelayTime(times, n, k));  // Output: should be 2