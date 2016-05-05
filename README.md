Matplotlib Notebook Extension
=============================

This package contains the Jupyter notebook extension for the interactive
matplotlib notebook backend.

Installation
------------

```
$ pip install mplnbextension
$ jupyter nbextension enable --py mplnbextension
```

For a development installation (requires npm),

```
$ git clone https://github.com/matplotlib/jupyter-matplotlib.git
$ cd jupyter-matplotlib
$ pip install -e .
$ jupyter nbextension install --py --symlink --user mplnbextension
$ jupyter nbextension enable --py --user mplnbextension
```

Note for developers: the `--symlink` argument on Linux or OS X allows one to
modify the JavaScript code in-place. This feature is not available
with Windows.


