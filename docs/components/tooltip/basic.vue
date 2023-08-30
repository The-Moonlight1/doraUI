<template>
  <dora-space>
    <div class="container">
      <div class="top">
        <div>
          <dora-tooltip placement="topLeft" title="TL">
            <dora-button>TL</dora-button>
          </dora-tooltip>
        </div>
        <div>
          <dora-tooltip placement="top">
            <dora-button>Top</dora-button>
          </dora-tooltip>
        </div>
        <div>
          <dora-tooltip placement="topRight">
            <dora-button>TR</dora-button>
          </dora-tooltip>
        </div>
      </div>
      <div class="center">
        <div>
          <div>
            <dora-tooltip placement="leftTop">
              <dora-button>LT</dora-button>
            </dora-tooltip>
          </div>
          <div>
            <dora-tooltip placement="left">
              <dora-button>Left</dora-button>
            </dora-tooltip>
          </div>
          <div>
            <dora-tooltip placement="leftBottom">
              <dora-button>LB</dora-button>
            </dora-tooltip>
          </div>
        </div>
        <div>
          <div>
            <dora-tooltip placement="rightTop">
              <dora-button>RT</dora-button>
            </dora-tooltip>
          </div>
          <div>
            <dora-tooltip placement="right">
              <dora-button>Right</dora-button>
            </dora-tooltip>
          </div>
          <div>
            <dora-tooltip placement="rightBottom">
              <dora-button>RB</dora-button>
            </dora-tooltip>
          </div>
        </div>
      </div>
      <div class="bottom">
        <div>
          <dora-tooltip placement="bottomLeft">
            <dora-button>BL</dora-button>
          </dora-tooltip>
        </div>
        <div>
          <dora-tooltip placement="bottom">
            <dora-button>Bottom</dora-button>
          </dora-tooltip>
        </div>
        <div>
          <dora-tooltip placement="bottomRight">
            <dora-button>BR</dora-button>
          </dora-tooltip>
        </div>
      </div>
    </div>
  </dora-space>
</template>
<style scoped>
  .top,
  .bottom,
  .center {
    display: flex;
    justify-content: center;
  }
  .top > div,
  .bottom > div,
  .center > div > div {
    margin: 8px;
  }
  .center {
    justify-content: space-between;
  }
  .container {
    width: 100%;
    min-width: 350px;
  }
</style>
