# Algorithm Problem Solutions in JavaScript

This repository contains solutions to algorithmic problems using JavaScript. Below I have a brief description of each problem, the approach method and solution for each problem.

## 1. Sorting an Array

**Objective, challenges and optimization**:
The objective is to sort an array of numbers in ascending order. The time complexity required is O(n log n), which makes the Merge Sort algorithm an optimal choice.

First, I split the array into two halves until each half contains a single element. Then, I merged the sorted arrays back together in the correct order. The mergeSort function compares elements from the two halves and merges them into the original array, placing the smaller elements first.

One optimization I implemented was to sort the elements back into the original array instead of creating a new one, which makes the algorithm more memory-efficient. This method of merging also reduces redundant comparisons of elements from the split arrays once one of them has been fully processed.


## 2. Network Delay Time Problem

**Objective, challenges and optimization**:
This problem involves a network of n nodes, where a signal is sent from a given node k. The task is to calculate the minimum time it takes for all nodes to receive the signal. If some nodes are unreachable, the function should return -1.

I used Dijkstra's algorithm to solve the problem. After building the graph, I initialized the distances, then processed each node's neighbors to find the shortest paths. Once all distances were calculated, I returned the maximum of these shortest times to ensure that all nodes had received the signal.

The biggest challenge I faced was conceptualizing the steps to solve the problem, since Dijkstra’s algorithm is typically used to find the shortest path. However, the problem required calculating the time for all nodes to receive the signal, which meant I needed to return the maximum of the shortest times. In other words, the overall time was determined by the longest time it took for any node to receive the signal, using the shortest paths possible.

It took me some time to grasp this concept, as I initially thought Dijkstra's output would directly provide the answer. I revisited similar graph traversal exercises to fully understand this approach.


