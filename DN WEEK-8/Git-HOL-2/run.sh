#!/bin/bash
git branch new-feature
git checkout new-feature
echo 'Feature content' > feature.txt
git add feature.txt
git commit -m 'Add feature.txt in new-feature branch'
